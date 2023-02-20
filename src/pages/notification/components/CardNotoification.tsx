import { ReactElement } from 'react'
import { CancelIcon, OpenIcon, SuccessIcon } from '../../../assets/icon';

const detailStatus = [
    {
        status: "OPEN",
        icon: <OpenIcon className='w-6 ' />,
        head: "รอการชำระเงิน",
        body: "คุณมีคำสั่งซื้อที่รอชำระ"
    },
    {
        status: "SUCCESS",
        icon: <SuccessIcon className='w-6 ' />,
        head: "คำสั่งซื้อสำเร็จแล้ว",
        body: "คำสั่งซื้อนี้สำเร็จแล้ว"
    },
    {
        status: "CANCELLED",
        icon: <CancelIcon className='w-6 ' />,
        head: "คำสั่งซื้อถูกยกเลิก",
        body: "คำสั่งซื้อนี้ถูกยกเลิกแล้ว"
    }
]

type CardNotificationType = {
    paymentId: number;
    status: string;
}

export const CardNotification = ({ paymentId, status }: CardNotificationType): ReactElement => {
    return (
        <>
            {detailStatus.map(item => {
                if (item.status === status) {
                    return (
                        <div key={paymentId} className='w-full flex gap-4 p-4 justify-between items-center bg-white border-t border-grey-light' onClick={() => window.location.href = `/order/${paymentId}`}>
                            <div className='w-12 h-12 bg-red-pink rounded-lg flex justify-center items-center'>
                                {item.icon}
                            </div>
                            <div className='w-full flex flex-col justify-center items-start'>
                                <div className='text-base'>{item.head}</div>
                                <div className='text-sm text-grey'>{item.body}</div>
                                <div className='text-xs text-grey'>หมาเลขคำสั่งซื้อ: {paymentId}</div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}