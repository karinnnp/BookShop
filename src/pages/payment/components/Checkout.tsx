import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonM } from '../../../component/Button';
import { useAppDispatch } from '../../../hooks/redux';
import { setLoading } from '../../../redux/slice/loading';
import { formatMoneyAmount } from '../../../utils/formatData';

type CheckoutType = {
  paymantId: number
  totalPrice: number
  typePayment: number
}

export const Checkout = ({ paymantId, totalPrice, typePayment }: CheckoutType): ReactElement => {
  const dispatch = useAppDispatch();
  
  const cancalOrder = async () => {
    dispatch(setLoading(true));
    // const res = await cancelOrderById(Number(paymentId));
    // if (res.status === 'SUCCESS') {
    //   localStorage.setItem("typeOrder", "3")
    //   navigate('/order');
    // }
    dispatch(setLoading(false));
  };

  return (
    <div className='sm:container fixed bottom-0 sm:mx-auto flex w-full items-center justify-end gap-2 bg-white p-4 shadow-base3 sm:w-[1024px]'>
      <div className='text-xs text-grey-dark'>ยอดชำระเงินทั้งหมด</div>
      <div className='px-1 font-semibold text-red'>
        {formatMoneyAmount(totalPrice)}
      </div>
      <div className='w-80 flex gap-4'>
        <ButtonM
          title='ชำระเงิน'
          bgStyle='red'
          handleClick={() => {}}
        />
        <ButtonM
          title='ยกเลิกการชำระเงิน'
          bgStyle='grey'
          handleClick={() => cancalOrder()}
        />
      </div>
    </div>
  );
};
