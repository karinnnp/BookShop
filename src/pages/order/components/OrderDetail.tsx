import { ReactElement, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { OrderIcon } from '../../../assets/icon';
import { ButtonM } from '../../../component/Button';
import { Hrs } from '../../../component/Hr';
import { mockOrder } from '../../../data';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setLoading } from '../../../redux/slice/loading';
import { setNewOrder } from '../../../redux/slice/order';
import { OrdersType } from '../../../types/order';
import { convertDateMinuteByHyphen, formatMoneyAmount } from '../../../utils/formatData';
import { setReduxIsTrueFromData } from '../../../utils/helper';
import { StatusPayment } from './StatusPayment';

export const OrderDetail = (): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const order = useAppSelector((state) => state.order)
  const [detail, setDetail] = useState({} as OrdersType)

  useEffect(() => {
    dispatch(setLoading(true))
    const dataOrder = mockOrder.filter(item => item.id === Number(orderId))[0];
    setDetail(dataOrder)
    dispatch(setLoading(false))
  }, [])

  const cancalOrder = async () => {
    dispatch(setLoading(true));
    // const res = await cancelOrderById(Number(detail.id));
    // if (res.status === 'SUCCESS') {
    //   localStorage.setItem("typeOrder", "3")
    //   navigate('/order');
    // }
    dispatch(setLoading(false));
  };

  const buyAgain = () => {
    const newData = setReduxIsTrueFromData(order, detail);
    dispatch(setNewOrder(newData));
    navigate('/cart');
  };

  return (
    <>
      {Object.keys(detail).length > 0 &&
        <>
          <StatusPayment status={detail.status} />
          <div className='flex h-full w-full flex-col gap-2 bg-grey-light'>
            <div className='w-full flex flex-col bg-white-soft p-4 gap-2'>
              <div className='text-lg font-bold text-dark cursor-pointer' onClick={() => window.location.href = "/"}>Book's</div>
              <div className='flex flex-col gap-2'>
                {detail.products.map((v, i) => {
                  return (
                    <div key={i} className='w-full flex flex-col gap-2'>
                      <div className='flex w-full border-t border-grey-light pt-4'>
                        <img className='h-20 w-20 rounded cursor-pointer' src={v.thumbnail} alt='Shirt' onClick={() => window.location.href = `/product/${v.id}`} />
                        <div className='ml-2 flex w-full flex-col'>
                          <div className='text-base font-medium text-dark-grey line-clamp-1 cursor-pointer' onClick={() => window.location.href = `/product/${v.id}`}>{v.name}</div>
                          <div className='flex justify-between text-sm font-medium text-grey-dark '>
                            <div>฿{formatMoneyAmount(Number(v.price) / 100)}</div>
                            <div>x{v.quantity}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Hrs />
              <div className='flex w-full flex-col gap-2'>
                <div className={rowDataCSS}>
                  <div className={rowInDataCSS}>รายการสั่งซื้อ</div>
                  <div>฿{formatMoneyAmount(Number(detail.totalPrice) / 100)}</div>
                </div>
                <div className={rowDataCSS}>
                  <div className={rowInDataCSS}>รวมรายการ</div>
                  <div>฿{formatMoneyAmount(Number(detail.totalPrice) / 100)}</div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 bg-white p-4'>
              <div className='flex gap-2'>
                <OrderIcon className='w-4 fill-red' />
                <div className='text-xs font-bold text-grey-dark'>
                  ข้อมูลการสั่งซื้อ
                </div>
              </div>
              <div className='flex w-full flex-col gap-2'>
                <div className={rowDataCSS}>
                  <div className={rowInDataCSS}>รายการสั่งซื้อ</div>
                  <div>{formatMoneyAmount(Number(detail.totalPrice)/100)}</div>
                </div>
                <div className='flex justify-between text-base font-semibold'>
                  <div className='text-base font-semibold text-dark'>
                    ยอดชำระเงินทั้งหมด
                  </div>
                  <div className='font-semibold text-red'>
                    {formatMoneyAmount(Number(detail.totalPrice)/100)}
                  </div>
                </div>
              </div>
              <Hrs />
              {detail.status === 'OPEN' ? (
                <>
                  <ButtonM title='ชำระเงิน' bgStyle='red' handleClick={() => navigate(`/payment/${detail.id}`)} />
                  <div className='flex items-center justify-center'>
                    <div className='cursor-pointer border-b border-red text-base font-medium text-red' onClick={() => cancalOrder()}>
                      ยกเลิกคำสั่งซื้อ
                    </div>
                  </div>
                </>
              ) : (
                <ButtonM title='ซื้ออีกครั้ง' bgStyle='black' handleClick={() => buyAgain()} />
              )}
            </div>
          </div>
        </>
      }
    </>
  );
};

const rowDataCSS = 'flex justify-between text-grey-dark text-sm ';
const rowInDataCSS = 'text-sm text-dark-grey font-medium';
