import { ReactElement, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ButtonM } from '../../component/Button';
import { PopupProduct } from '../../component/PopupProduct';
import { mock } from '../../data';
import { useAppDispatch } from '../../hooks/redux';
import { useScrollIndicator } from '../../hooks/useScroollIndicator';
import { setLoading } from '../../redux/slice/loading';
import { ProductsType } from '../../types/product';
import { formatMoneyAmount } from '../../utils/formatData';

export const Product = (): ReactElement => {
  const dispatch = useAppDispatch()
  const { productId } = useParams()
  const [detail, setDetail] = useState<ProductsType>({} as ProductsType)
  const [textBtn, setTextBtn] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const imgRef = useRef(null);

  useEffect(() => {
    dispatch(setLoading(true))
    const data = mock.filter(item => item.id === Number(productId))[0]

    setDetail(data)
    dispatch(setLoading(false))
  }, [dispatch, productId])

  const index = useScrollIndicator(detail.thumbnail?.length, imgRef)

  const openPopup = (type: string) => {
    switch (type) {
      case 'เพิ่มไปยังตะกร้า':
        setTextBtn('เพิ่มไปยังตะกร้า')
        break
      case 'ตัวเลือกสินค้า':
        setTextBtn('เพิ่มไปยังตะกร้า')
        break
    }
    setIsOpen(true)
  }

  return (
    <>
      {Object.keys(detail).length > 0 &&
        <div className='w-full h-auto flex flex-col gap-2 pb-20'>
          <div className='bg-white shadow-base'>
            <div className='relative w-full'>
              <div className='flex snap-x snap-mandatory overflow-x-auto' ref={imgRef}>
                {detail.thumbnail.map((v, i) => {
                  return (
                    <div className='flex w-full flex-shrink-0 snap-center snap-always items-center justify-center' key={`product-${i}`}>
                      <img src={v} alt={`product-${i}`} className='w-full' />
                    </div>
                  );
                })}
              </div>
              <div className='absolute bottom-4 right-4 w-auto rounded-2xl bg-grey-dark bg-opacity-50 px-3 py-1 text-white'>
                {index > 0 && index <= detail.thumbnail?.length ? index : index < 1 ? 1 : index > detail.thumbnail?.length && detail.thumbnail?.length}/{detail.thumbnail?.length}
              </div>
            </div>
            <div className='flex w-full flex-col gap-1 p-4'>
              <div className='text-base font-medium text-dark'>{detail.name}</div>
              <div className='text-sm text-grey line-clamp-2'>ผู้แต่ง : {detail.author}</div>
              <div className='text-xl font-medium text-red'>{formatMoneyAmount(Number(detail.price) / 100)}</div>
            </div>
          </div>

          <div className="bg-white p-4 shadow-base">
            <div className='mb-2 text-base font-semibold text-dark'>รายละเอียดสินค้า</div>
            <div className="text-base text-grey-dark sm:h-auto">
              {detail.description.split('\n').map((v, i) => {
                return (
                  <div key={i}>
                    {v}<br />
                  </div>
                )
              })}
              <div>
              </div>
            </div>
          </div>
          <div className='w-full sm:container sm:mx-auto sm:w-[1024px] flex justify-center p-2 gap-2 fixed bottom-0 z-30 bg-white shadow-2xl shadow-black'>
            <ButtonM title='เพิ่มไปยังตะกร้า' bgStyle='red' handleClick={() => openPopup('เพิ่มไปยังตะกร้า')} />
          </div>
          <PopupProduct isOpen={isOpen} setIsOpen={setIsOpen} productId={Number(productId)} textBtn={textBtn} />
        </div>
      }
    </>
  )
}