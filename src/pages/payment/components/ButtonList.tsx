
import { Dispatch, ReactElement, SetStateAction } from 'react'
import { BankIcon, CoinIcon, CreditCardIcon, QRcodeIcon, SCBBankIcon, TranferIcon } from '../../../assets/icon'
import { ButtonIconTop } from '../../../component/Button'
import qrcode from '../../../assets/qrcode.png'

const PaymentType = [
  {
    id: 1,
    title: 'โอนเงินผ่านบัญชีธนาคาร',
    icon: <TranferIcon className='h-6 fill-grey-dark' />,
  },
  {
    id: 2,
    title: 'สแกน QR CODE',
    icon: <QRcodeIcon className='h-6 fill-grey-dark' />,
  },
  // {
  //   id: 3,
  //   title: 'บัตรเครดิต/บัตรเดบิต',
  //   icon: <CreditCardIcon className='h-6 fill-red' />,
  // },
  {
    id: 3,
    title: 'เหรียญในกระเป๋า',
    icon: <CoinIcon className='h-6 fill-grey-dark' />,
  }
]

type ButtonListProps = {
  payment: number
  setPaymentType: Dispatch<SetStateAction<number>>
}

export const ButtonList = ({ payment, setPaymentType }: ButtonListProps): ReactElement => {
  return (
    <div className='flex w-full flex-col gap-2 bg-white p-4'>
      <div className='flex gap-2'>
        <BankIcon className='w-4 fill-red' />
        <div className='text-xs font-bold text-grey-dark'>วิธีการชำระเงิน</div>
      </div>
      <div className='flex w-full gap-2'>
        {PaymentType.map(item => {
          return (
            <ButtonIconTop
              key={item.title}
              actived={item.id === payment}
              text={item.title}
              bgStyle='green'
              leftIcon={item.icon}
              handleClick={() => setPaymentType(item.id)}
            />
          )
        })}
      </div>

      <div className='flex flex-col gap-2 items-center w-full'>
        {payment === 1 ? (
          <div className='flex gap-4 justify-center items-center'>
            <SCBBankIcon className='w-20 h-20' />
            <div className='flex flex-col'>
              <div className='text-sm text-dark'>ธนาคารไทยพาณิชย์ จำกัด (มหาชน)</div>
              <div className='text-base font-semibold text-black'>ชื่อบัญชี: book's</div>
              <div>
                <span className='pr-2	text-base text-grey-dark'>เลขที่บัญชี </span>
                <span className='text-xl font-semibold text-black'>123-456789-0</span>
              </div>
            </div>
          </div>
        ) : (
          payment === 2 ? (
            <img src={qrcode} className='rounded-lg w-3/5' alt="qrcode" />
          ) : (
            payment === 3 && (
              <div className='flex flex-col items-start w-full'>
                <div className='flex gap-4 justify-center items-center'>
                  <div className='text-sm text-dark'>เงินในกระเป๋า : </div>
                  <div className='text-base font-semibold text-black'>300 เหรียญ</div>
                </div>
                <div className='text-sm text-grey'>(1 เหรียญ แทน 1 บาท)</div>
              </div>
            )
          )
        )}
      </div>
    </div>
  )
}
