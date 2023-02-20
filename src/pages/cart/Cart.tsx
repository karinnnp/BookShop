import { ReactElement, useEffect, useState } from 'react'
import { BinIcon } from '../../assets/icon'
import { ButtonM } from '../../component/Button'
import { ButtonPlusMinusOrder } from '../../component/ButtonPlusMinus'
import { Checkbox } from '../../component/CheckBox'
import { Hrd } from '../../component/Hr'
import { mock } from '../../data'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setLoading } from '../../redux/slice/loading'
import { ProductState, setNewOrder } from '../../redux/slice/order'
import { CartType } from '../../types/cart'
import { SummaryType } from '../../types/product'
import { formatMoneyAmount } from '../../utils/formatData'
import EmptyCart from './components/EmptyCart'

export const Cart = (): ReactElement => {
  const dispatch = useAppDispatch()
  const order = useAppSelector((state) => state.order)
  const [cart, setCart] = useState<CartType[]>([])
  const [productSummary, setProductSummary] = useState<SummaryType>({} as SummaryType)

  useEffect(() => {
    dispatch(setLoading(true))
    const data: CartType[] = []
    order.products.forEach(item => {
      const temp = mock.filter(p => p.id === item.productId)
      if (temp.length > 0) {
        data.push({ productId: temp[0].id, quantity: item.quantity, selected: item.selected, name: temp[0].name, price: temp[0].price, thumbnail: temp[0].thumbnail, stock: temp[0].stock })
      }
    })

    const sum: SummaryType = { totalPrice: 0, selectedProduct: data.filter(p => p.selected).length, isDisabledBtn: true, isSelectedAll: false }
    setProductSummary(sum)
    setCart(data)
    dispatch(setLoading(false))
  }, [])

  const deleteProduct = (id: number) => {
    setCart(cart.filter(item => item.productId !== id))
    dispatch(setNewOrder({ products: order.products.filter(item => item.productId !== id) }))
  }

  const selectedItem = (id: number, select?: boolean) => {
    let data: CartType[] = []
    let orderRedux: ProductState[] = []
    if (id > 0) {
      data = cart.map(v => {
        if (v.productId === id) {
          return { ...v, selected: !v.selected}
        }
        return v
      })
      orderRedux = order.products.map(v => {
        if (v.productId === id) {
          return { ...v, selected: !v.selected}
        }
        return v
      })
    } else {
      data = cart.map(v => ({ ...v, selected: !v.selected}))
      orderRedux = order.products.map(v => ({ ...v, selected: !v.selected}))
    }

    const count = data.filter(p => p.selected).length
    const sum = data.reduce((sum, object) => {
      if (object.selected) {
        return sum + (Number(object.price)/100);
      }
      return sum + 0
    }, 0);

    setProductSummary({ totalPrice: sum, selectedProduct: count, isDisabledBtn: count === 0, isSelectedAll: select ? !productSummary.isSelectedAll : false })
    setCart(data)
    dispatch(setNewOrder({ products: orderRedux}))
  }

  const goToPayment = () => {
    const data = order.products.filter(item => item.selected);
    // api สร้างการชำระเงิน เอา paymentId
    // dispatch(setNewOrder({ products: order.products.filter(item => !item.selected)}))
    window.location.href = '/payment/0'
  }

  return (
    <>
      {cart.length > 0 ? (
        <div className='mt-3 mb-20 flex h-full w-full flex-col gap-3 bg-grey-light'>
          <div className='flex justify-between px-4 text-base font-semibold text-dark-grey'>
            <div>จำนวนคำสั่งซื้อ</div>
            <div>{cart.length} รายการ</div>
          </div>
          <div className='flex flex-col bg-white'>
            {cart.map((item, index) => {
              return (
                <div key={item.productId}>
                  <div className='flex w-full justify-between gap-2 border-t border-grey-light p-4 bg-white'>
                    <div className='flex items-start justify-center gap-2'>
                      <Checkbox sm checked={item.selected}
                        handleClick={() => selectedItem(item.productId)} />
                      <img src={item.thumbnail[0]} alt='รูปภาพสินค้า' className='h-24 cursor-pointer' onClick={() => window.location.href = `product/${item.productId}`} />
                    </div>
                    <div className='w-full h-full flex flex-1 flex-col gap-1 items-start'>
                      <p className='cursor-pointer text-base font-medium text-grey-dark line-clamp-1' onClick={() => window.location.href = `product/${item.productId}`}>{item.name}</p>
                      <p className='text-sm font-semibold text-red'>{formatMoneyAmount((Number(item.price) / 100))}</p>
                      <ButtonPlusMinusOrder value={item.quantity} count={item.stock} productId={item.productId} />
                    </div>
                    <div onClick={() => deleteProduct(item.productId)}>
                      <BinIcon className='h-7 w-7 fill-dark  hover:cursor-pointer' />
                    </div>
                  </div>
                  {index + 1 !== cart.length && <Hrd />}
                </div>
              )
            })}
          </div>
          <div className='sm:container fixed bottom-0 sm:mx-auto flex w-full justify-between bg-white p-3 shadow-base sm:w-[1024px]'>
            <div className='flex items-center justify-center' onClick={() => selectedItem(0, true)}>
              <Checkbox sm checked={productSummary.isSelectedAll} handleClick={() => {}} />
              <div className='max-ss:text-sm max-ss:px-1 px-2'>ทั้งหมด</div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-xs text-dark-grey'>รวมทั้งหมด</div>
              <div className='max-ss:text-sm maxa-ss:px-1 px-2 text-base text-red'>{formatMoneyAmount(productSummary.totalPrice)}</div>
              <div className='w-32'>
                <ButtonM title={productSummary.selectedProduct > 99 ? `สั่งสินค้า( 99+ )` : `สั่งสินค้า(${productSummary.selectedProduct})`} disabled={productSummary.isDisabledBtn} bgStyle='red' handleClick={() => goToPayment()} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}