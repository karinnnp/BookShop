import { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mock, mockOrder } from '../../data'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setLoading } from '../../redux/slice/loading'
import { CartType } from '../../types/cart'
import { ButtonList } from './components/ButtonList'
import { Checkout } from './components/Checkout'
import { OrderProduct } from './components/OrderProduct'
import SummaryCard from './components/SummaryCard'

export const Payment = (): ReactElement => {
    const dispatch = useAppDispatch()
    const { paymentId } = useParams();
    const order = useAppSelector((state) => state.order)
    const [dataOrder, setDataOrder] = useState<CartType[]>([])
    const [paymentType, setPaymentType] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [isDisable, setIsDisable] = useState(false)

    useEffect(() => {
        dispatch(setLoading(true))
        const data: CartType[] = []
        if (Number(paymentId) === 0) {
            order.products.forEach(item => {
                const temp = mock.filter(p => p.id === item.productId)
                if (temp.length > 0 && item.selected) {
                    data.push({ productId: temp[0].id, quantity: item.quantity, selected: item.selected, name: temp[0].name, price: temp[0].price, thumbnail: temp[0].thumbnail, stock: temp[0].stock })
                }
            })
        } else {
            mockOrder.forEach(item => {
                if (item.id === Number(paymentId)) {
                    item.products.forEach(p => {
                        const temp = mock.filter(v => v.id === p.id)
                        temp.length > 0 && data.push({ productId: p.id, quantity: p.quantity, selected: true, name: temp[0].name, price: temp[0].price, thumbnail: temp[0].thumbnail, stock: temp[0].stock })
                    })
                    setPaymentType(item.typePayment)
                    setIsDisable(true)
                }
        })
}

const sum = data.reduce((sum, object) => sum + ((Number(object.price) / 100) * object.quantity), 0);

setTotalPrice(sum)
setDataOrder(data)
dispatch(setLoading(false))
    }, [])

return (
    <>
        {order.products.length > 0 && (
            <div className='mb-24 flex h-auto w-full flex-col gap-2 bg-grey-light'>
                <OrderProduct order={dataOrder} totalPrice={totalPrice} isDisable={isDisable} />
                <SummaryCard totalPrice={totalPrice} />
                <ButtonList payment={paymentType} setPaymentType={setPaymentType} />
                <Checkout paymantId={Number(paymentId)} totalPrice={totalPrice} typePayment={paymentType} />
            </div>
        )}
    </>
)
}