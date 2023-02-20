import { ReactElement } from 'react'
import { EmptyCartIcon } from '../../../assets/icon'
import { ButtonM } from '../../../component/Button'

const EmptyCart = (): ReactElement => {
  return (
    <div className='flex h-[calc(100vh-64px)] flex-col items-center gap-7 p-20'>
      <EmptyCartIcon className='h-44 w-44' />
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='text-xl text-dark-grey'>ตะกร้าสินค้ายังว่างอยู่นะ</div>
        <div className='text-md text-dark-grey'>ไปเลือกสินค้าใส่ตะกร้ากันดีกว่า</div>
      </div>
      <div className='w-44'>
        <ButtonM title='กลับไปหน้าแรก' bgStyle='black' handleClick={() => window.location.href='/'} />
      </div>
    </div>
  )
}

export default EmptyCart
