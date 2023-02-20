import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';
import { OrderIcon } from '../../../assets/icon';
import { ButtonPlusMinusOrder } from '../../../component/ButtonPlusMinus';
import { Hrs } from '../../../component/Hr';
import { CartType } from '../../../types/cart';
import { formatMoneyAmount } from '../../../utils/formatData';

type OrderProductType = {
    order: CartType[]
    totalPrice: number
    isDisable: boolean
}

export const OrderProduct = ({ order, totalPrice, isDisable }: OrderProductType): ReactElement => {
    const navigate = useNavigate()

    return (
        <div className='w-full bg-white p-4 flex flex-col gap-2'>
            <div className='flex gap-2'>
                <OrderIcon className='w-4 fill-red' />
                <div className='text-xs font-bold text-grey-dark'>
                    รายการสินค้า
                </div>
            </div>
            <Hrs />
            <div className='flex flex-col gap-3 py-1'>
                {order.length > 0 &&
                    order.map((v, i) => {
                        return (
                            <div key={v.productId} className='flex gap-2'>
                                <img className='w-[106px] rounded cursor-pointer' src={v.thumbnail[0]} alt='Shirt' onClick={() => navigate(`/product/${v.productId}`)} />
                                <div className='flex w-full flex-col'>
                                    <div className='text-base font-medium cursor-pointer' onClick={() => navigate(`/product/${v.productId}`)}>
                                        {v.name}
                                    </div>
                                    <div className='flex justify-between text-sm font-medium text-grey-dark '>
                                        <div>{formatMoneyAmount(Number(v.price) / 100)}</div>
                                        <div>x{v.quantity}</div>
                                    </div>
                                    <div className='w-full h-full flex items-start'>
                                        <ButtonPlusMinusOrder value={v.quantity} count={v.stock} productId={v.productId} disabled={isDisable} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Hrs />
            <div className='flex justify-between'>
                <div className='text-sm'>คำสั่งซื้อทั้งหมด ({order.length} ชิ้น) :</div>
                <div className='text-sm text-dark-grey'>{formatMoneyAmount(totalPrice)}</div>
            </div>
        </div>
    )
}