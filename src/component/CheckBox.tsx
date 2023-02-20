import { FC } from 'react'
import { CheckDisabledIcon, CheckRoundedIcon, CheckRoundedMinusIcon } from '../assets/icon'

interface CheckBoxProps {
  sm?: boolean
  title?: string
  minusCheck?: boolean
  checked: boolean
  disabled?: boolean
  handleClick: (e: any) => void
}

const positionCSS = 'flex items-center'
const boxCSS = 'flex items-center bg-white border rounded border-grey fill-white'
const boxIconCSS = 'flex items-centerflex justify-center items-center bg-red rounded fill-white p-1'

export const Checkbox: FC<CheckBoxProps> = ({ sm, title, minusCheck, checked, disabled, handleClick }) => {
  const size = sm ? 'w-6 h-6' : 'w-8 h-8'
  const fontSize = sm ? 'text-lg' : 'text-xl'
  const isChecked = checked ? boxIconCSS : boxCSS

  return (
    <div className={positionCSS} onClick={disabled ? () => {} : handleClick}>
      {minusCheck && (
        <>
          <CheckRoundedMinusIcon className={`${isChecked} ${size}`} />
          {title && <div className={`ml-2 ${fontSize}`}>{title}</div>}
        </>
      )} 
      {(!disabled && !minusCheck) && (
        <>
          <CheckRoundedIcon className={`${isChecked} ${size}`} />
          {title && <div className={`ml-2 ${fontSize}`}>{title}</div>}
        </>
      )}
      {disabled && (
        <CheckDisabledIcon className={size} />
      )}
    </div>
  )
}
