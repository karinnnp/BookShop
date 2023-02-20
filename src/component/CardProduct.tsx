import { ReactElement } from 'react';
import { ProductsType } from '../types/product';
import { formatMoneyAmount } from '../utils/formatData';

type ProductProps = {
  product: ProductsType
  handleClick: () => void;
};

const CardProduct = ({ product, handleClick }: ProductProps): ReactElement => {
  return (
    <div className='flex h-auto w-full flex-col gap-2 rounded-lg border border-grey-light bg-white hover:cursor-pointer' onClick={handleClick}>
      <img src={product.thumbnail[0]} alt={product.name} className='rounded-t-lg w-full h-[270px]' />
      <div className='flex flex-col gap-0.5 p-2'>
        <div className='h-12 text-md font-medium text-grey-dark line-clamp-2'>{product.name}</div>
        <div className='text-xs text-grey line-clamp-2'>{product.author}</div>
        <div className='text-base text-red'>{formatMoneyAmount(Number(product.price)/100)}</div>
      </div>
    </div>
  );
};

export default CardProduct;
