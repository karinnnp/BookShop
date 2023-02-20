import { ReactElement, useEffect, useState } from 'react'
import { mockOrder } from '../../data';
import { useAppDispatch } from '../../hooks/redux';
import { setLoading } from '../../redux/slice/loading';
import { OrdersType } from '../../types/order';
import { CardNotification } from './components/CardNotoification';

export const Notification = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<OrdersType[]>([])

  useEffect(() => {
    dispatch(setLoading(true));
    setData(mockOrder.sort())
    dispatch(setLoading(false));
  }, [])

  return (
    <div className='mb-24 flex h-auto w-full flex-col bg-grey-light'>
        {data.length > 0 && (
          data.map(item => {
            return (
              <CardNotification key={item.id} paymentId={item.id} status={item.status} />
            )
          })
        )}
    </div>
  )
}