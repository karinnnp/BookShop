import { ReactElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { OrderCartIcon } from '../../assets/icon';
import { ButtonM } from '../../component/Button';
import { mockOrder } from '../../data';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setLoading } from '../../redux/slice/loading';
import { setNewOrder } from '../../redux/slice/order';
import { OrdersType } from '../../types/order';
import { setReduxIsTrueFromData } from '../../utils/helper';
import ProductCard from './components/ProductCard';

const MENU = [
  { title: 'รอชำระเงิน', value: 'OPEN' },
  { title: 'สำเร็จ', value: 'SUCCESS' },
  { title: 'ยกเลิก', value: 'CANCELLED' },
];

type ExtractKeys<T> = keyof T;
type TitleType = ExtractKeys<typeof TITLE>;

const TITLE = {
  OPEN: 'รอชำระเงิน',
  SUCCESS: 'สำเร็จ',
  CANCELLED: 'ยกเลิก',
};

let isRun: boolean = true

export const Order = (): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const order = useAppSelector((state) => state.order)
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<OrdersType[]>([]);
  const [tempData, setTempData] = useState<OrdersType[]>([]);

  useEffect(() => {
    const tab = localStorage.getItem("typeOrder")
    if (tab) {
      if (isRun) {
        setIndex(Number(tab))
        getOrderPage(tab === "0" ? "OPEN" : tab === "1" ? "ATTACHED" : tab === "2" ? "SUCCESS" : "CANCELLED");
        localStorage.removeItem("typeOrder")
      }
    } else {
      if (isRun) {
        getOrderPage();
      }
    }

    return () => { isRun = false }

  }, []);

  const getOrderPage = async (type?: string) => {
    dispatch(setLoading(true));
    const dataOrder = mockOrder.sort();
    setData(dataOrder.filter((item) => type ? item.status === type : item.status === "OPEN"))
    setTempData(dataOrder)
    dispatch(setLoading(false));
  };

  const selectedTab = (index: number, title: string) => {
    setIndex(index);
    setData(tempData.filter((item) => item.status === title));
  };

  const checkToPage = async (val: OrdersType, status: string, id: number) => {
    if ((status as TitleType) === 'CANCELLED' || (status as TitleType) === 'SUCCESS') {
      const newData = setReduxIsTrueFromData(order, val)
      dispatch(setNewOrder(newData))
      navigate('/cart');
    } else {
      navigate(`/payment/${val.id}`)
    }
  };

  return (
    <div className={`flex h-full w-full mb-20 flex-col bg-grey-light ${data.length > 0 && 'gap-3'}`} >
      <div className='flex w-full justify-center border-b border-solid border-grey-light fixed top-16 sm:container sm:mx-auto sm:w-[1024px]'>
        {MENU.map((v, i) => {
          return (
            <div
              key={v.title}
              className={`w-1/3 bg-white py-[11px] text-center text-sm font-medium text-grey-dark hover:cursor-pointer
              ${index === i ? 'border-b-2 border-red' : ''}`}
              onClick={() => selectedTab(i, v.value)}
            >
              {v.title}
            </div>
          );
        })}
      </div>
      <div className='mt-[46px]'>
        {data.length > 0 ? (
          <div className='flex flex-col gap-2'>
            {data.map((v) => {
              return (
                <ProductCard
                  key={v.id}
                  detail={v}
                  handleClick={() => checkToPage(v, v.status, v.id)}
                />
              );
            })
            }
          </div>
        ) : (
          <div className='flex h-[calc(100vh-100px)] flex-col items-center bg-grey-light pt-16'>
            <OrderCartIcon className='h-[180px] w-[180px] fill-grey ' />
            <div className='mt-8 text-center text-xl font-semibold text-grey-dark'>
              ยังไม่มีรายการคำสั่ง
            </div>
            <div className='mt-2 text-center text-base font-medium text-grey-dark'>
              กรุณาเลือกซื้อสินค้า
            </div>
            <div className='mt-8 w-[174px]'>
              <ButtonM
                title='กลับไปหน้าร้านค้า'
                bgStyle='black'
                handleClick={() => window.location.href = '/'}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}