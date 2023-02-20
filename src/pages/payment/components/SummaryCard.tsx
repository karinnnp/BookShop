import { ReactElement } from 'react';
import { OrderIcon } from '../../../assets/icon';
import { formatMoneyAmount } from '../../../utils/formatData';

type ProductCardProps = {
    totalPrice: number
};

const SummaryCard = ({ totalPrice }: ProductCardProps): ReactElement => {
  return (
    <div className='flex flex-col gap-2 bg-white p-4'>
      <div className='flex gap-2'>
        <OrderIcon className='w-4 fill-red' />
        <div className='text-xs font-bold text-grey-dark'>
          ข้อมูลการสั่งซื้อ
        </div>
      </div>
      <div className='flex w-full flex-col'>
        <div className='flex justify-between text-sm text-grey-dark '>
          <div>รายการสั่งซื้อ</div>
          <div>{formatMoneyAmount(totalPrice)}</div>
        </div>
        <div className='flex justify-between text-base font-semibold'>
          <div className='text-dark'>ยอดชำระเงินทั้งหมด</div>
          <div className='text-red'>
            {formatMoneyAmount(totalPrice)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryCard;
