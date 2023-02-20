import React from 'react'
import { BG_STYLE, ButtonM } from './Button'

type PopupProps = {
  isOpen: boolean
  icon?: any
  textHead: string
  textBody: string
  textBtnConfirm?: string
  textBtnCancel?: string
  colorBtnCancle?:BG_STYLE
  colorBtnConfirm?: BG_STYLE
  handleConfirm?: () => void
  handleCancel?: () => void
}

export const Popup: React.FC<PopupProps> = (
  props: PopupProps
) => {
  return (
    <>
      {props.isOpen && (
        <div
          className='w-full h-full z-50 fixed top-0 left-0 flex flex-col justify-center items-center px-4'
          style={{ background: 'rgba(51, 51, 51, 0.8)' }}
        >
          <div className='w-full max-w-lg flex flex-col gap-6 justify-center items-center p-4 bg-white rounded-2xl shadow-2xl shadow-black '>
            {props.icon && props.icon}
            <div className='flex flex-col justify-center items-center'>
              <div className='text-xl font-semibold text-black-dark pb-2'>
                {props.textHead}
              </div>
              <div className="text-lg font-normal text-grey-red text-center">
              {props.textBody}
              </div>
            </div>
            <div className='flex gap-4 w-full justify-between'>
              {props.textBtnCancel && 
                <ButtonM
                  title={props.textBtnCancel}
                  bgStyle={props.colorBtnCancle || 'whiteGrey'}
                  handleClick={props.handleCancel}
                />
              }
              {props.textBtnConfirm && 
                <ButtonM
                  title={props.textBtnConfirm}
                  bgStyle={props.colorBtnConfirm || 'red'}
                  handleClick={props.handleConfirm}
                />
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}
