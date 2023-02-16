import React, { Dispatch, SetStateAction } from 'react'
import { ButtonS } from './Button'

type ButtonPlusMinusProps = {
  value: number
  setValue: Dispatch<SetStateAction<number>>
  count: number
  disabled?: boolean
}

export const ButtonPlusMinus: React.FC<ButtonPlusMinusProps> = ({ value, setValue, count, disabled }: ButtonPlusMinusProps) => {
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
