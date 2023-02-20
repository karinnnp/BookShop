import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState, } from 'react';
import { CloseIcon } from '../assets/icon';
import { mock } from '../data';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setLoading } from '../redux/slice/loading';
import { ProductState, setNewOrder } from '../redux/slice/order';
import { ProductsType } from '../types/product';
import { formatMoneyAmount } from '../utils/formatData';
import { ButtonM } from './Button';
import { ButtonPlusMinus } from './ButtonPlusMinus';
import { Hrs } from './Hr';
import TabPannel from './TabPannel';

type PopupSelectProps = {
  productId: number;
  quantity?: number;
  selected?: boolean;
  textBtn: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const PopupProduct: React.FC<PopupSelectProps> = ({ productId, quantity, selected, textBtn, isOpen, setIsOpen, }) => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.order);
  const [detail, setDetail] = useState<ProductsType>({} as ProductsType)
  const [count, setCount] = useState(1);
  const [isPopup, setIsPopup] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(setLoading(true))
    const data = mock.filter(item => item.id === Number(productId))[0]
    setDetail(data)

    // fetchProductById(productId)
    dispatch(setLoading(false))
  }, [dispatch, productId])

  const fetchProductById = async (id: number) => { };

  const confirmProduct = async () => {
    addRedux()
    setIsOpen(false)
  };

  const addRedux = () => {
    const arr: ProductState[] = []

    const checkProduct = order.products ? order.products.filter(item => item.productId === productId) : []

    order.products.length > 0 && order.products.forEach((item: ProductState) => {
      if (item.productId === productId) {
        arr.push({ ...item, quantity: item.quantity + count })
      } else {
        arr.push(item)
      }
    })

    if (checkProduct.length === 0) {
      arr.push({ productId: productId, quantity: count, selected: false })
    }
    dispatch(setNewOrder({ products: arr.sort((a, b) => a.productId - b.productId) }))
  };

  return (
    <TabPannel isOpen={isOpen}>
      <div className='flex items-start justify-between'>
        <div className='flex gap-4 w-full h-full max-ssm:flex-col'>
          {detail.thumbnail?.length > 0 && (
            <img src={detail.thumbnail[0]} className='w-[175px] rounded-md' alt='productImage' />
          )}
          <div className='flex flex-col justify-between w-full h-full max-ssm:gap-2'>
            <div className='text-base font-medium text-dark'>{detail.name}</div>
            <div className='text-sm text-grey line-clamp-2'>ผู้แต่ง : {detail.author}</div>
            <Hrs />
            <div className='flex items-center justify-between'>
              <div className='text-xl font-normal'>รวมราคาสินค้า</div>
              <div className='text-xl font-normal text-red'>{formatMoneyAmount(Number(detail.price) / 100)}</div>
            </div>
            <Hrs />
            <div className='flex items-center justify-between'>
              <div className='text-base font-medium'>จำนวน <span className='text-grey'>/ คลัง: {detail.stock}</span></div>
              <ButtonPlusMinus value={count} setValue={setCount} count={detail.stock} />
            </div>
            <div className='w-full'>
              {detail.stock > 0 ? (
                <ButtonM title={textBtn} bgStyle='red' handleClick={() => confirmProduct()} />
              ) : (
                <ButtonM title='สินค้าหมด' bgStyle='grey' />
              )}
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)}>
          <CloseIcon className='h-5 w-5 fill-black' />
        </button>
      </div>
    </TabPannel>
  );
};
