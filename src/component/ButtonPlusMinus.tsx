import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ProductState, setNewOrder } from '../redux/slice/order'
import { ButtonS } from './Button'

type ButtonPlusMinusProps = {
  value: number
  count: number
  disabled?: boolean
  productId?: number
}

interface setType extends ButtonPlusMinusProps {
  setValue: Dispatch<SetStateAction<number>>
}

export const ButtonPlusMinus: React.FC<setType> = ({ value, setValue, count, disabled }: setType) => {
  return (
    <div className={`flex items-center justify-center gap-6 ${disabled && "opacity-25"}`}>
      <div className='h-9 w-9'>
        <ButtonS bgStyle='black' title='-' disabled={value < 2 || disabled} handleClick={() => setValue(value - 1)} />
      </div>
      <div>{value}</div>
      <div className='h-9 w-9'>
        <ButtonS bgStyle='black' title='+' disabled={value >= count || disabled} handleClick={() => setValue(value + 1)} />
      </div>
    </div>
  )
}


export const ButtonPlusMinusOrder: React.FC<ButtonPlusMinusProps> = ({ value, count, disabled, productId }: ButtonPlusMinusProps) => {
  const dispatch = useAppDispatch()
  const order = useAppSelector((state) => state.order)
  const [quantity, setQuantity] = useState(value)

  const handleclick = (type: string) => {
    let data: ProductState[] = []
      if (type === "plus") {
        data = order.products.map(item => {
          if (item.productId === productId) {
            return { ...item, quantity: quantity + 1}
          }
          return item
        }) as ProductState[]
        setQuantity(quantity + 1)
      } else {
        data = order.products.map(item => {
          if (item.productId === productId) {
            return { ...item, quantity: quantity - 1}
          }
          return item
        }) as ProductState[]
        setQuantity(quantity - 1)
      }
      dispatch(setNewOrder({ products: data }))
  }

  return (
    <div className={`flex items-center justify-center gap-6 ${disabled && "opacity-25"}`}>
      <div className='h-9 w-9'>
        <ButtonS bgStyle='black' title='-' disabled={quantity < 2 || disabled} handleClick={() => handleclick("minus")} />
      </div>
      <div>{quantity}</div>
      <div className='h-9 w-9'>
        <ButtonS bgStyle='black' title='+' disabled={quantity >= count || disabled} handleClick={() => handleclick("plus")} />
      </div>
    </div>
  )
}
