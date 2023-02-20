import React from 'react';
import { ButtonM } from '../../../component/Button';
import { Hrs } from '../../../component/Hr';
import { OrdersType } from '../../../types/order';
import { formatMoneyAmount } from '../../../utils/formatData';

type CardProductProp = {
  detail: OrdersType;
  handleClick?: (e?: any) => void;
};

const ProductCard: React.FC<CardProductProp> = ({ detail, handleClick, }) => {
  const goToOrderDetail = () => {
    localStorage.setItem("orderByPaymentId", JSON.stringify(detail))
    window.location.href = `/order/${detail.id}`
  }

  return (
    <div className='flex flex-col gap-2 bg-white px-4 pb-4 pt-2'>
      <div className="w-full flex flex-col gap-2">
        <div className='flex justify-between w-full cursor-pointer' onClick={() => goToOrderDetail()}>
          <div className='text-lg font-bold text-dark'>Book's</div>
          <div className={`${detail.status === 'SUCCESS' ? 'text-green' : detail.status === 'CANCELLED' ? 'text-red-dark' : "text-red"} text-base font-medium`}>{detail.status}</div>
        </div>
        <div className='flex flex-col gap-2'>
          {detail.products.map((v, i) => {
            return (
              <div key={i} className='w-full flex flex-col gap-2'>
                <div className='flex w-full border-t border-grey-light pt-4 cursor-pointer' onClick={() => goToOrderDetail()}>
                  <img className='h-20 w-20 rounded' src={v.thumbnail} alt='Shirt' />
                  <div className='ml-2 flex w-full flex-col'>
                    <div className='text-base font-medium text-dark-grey line-clamp-1'>{v.name}</div>
                    <div className='flex justify-between text-sm font-medium text-grey-dark '>
                      <div>{formatMoneyAmount(Number(v.price) / 100)}</div>
                      <div>x{v.quantity}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Hrs />
      </div>
      <div className='flex justify-between'>
        <div className='text-base font-medium text-dark'>
          ยอดชำระเงินทั้งหมด
        </div>
        <div className='text-base font-medium text-red'>
          {formatMoneyAmount(Number(detail.totalPrice) / 100)}
        </div>
      </div>
      <Hrs />

      {detail.status === 'OPEN' ? (
        <ButtonM title='ชำระเงิน' bgStyle='red' handleClick={handleClick} />
      ) : (
        <ButtonM title='ซื้ออีกครั้ง' bgStyle='black' handleClick={handleClick} />
      )}
    </div>
  );
};

export default ProductCard;
