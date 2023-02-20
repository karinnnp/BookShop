import React, { useEffect, useState } from "react";
import { BoxCheckMark, DocumentDismiss, MoneyHand } from "../../../assets/icon";

type dataStatus = {
    textHead: string;
    textDetail1: string;
    textDetail2: string;
    icon: any;
    bgColor: string;
};

type AllStatusPayment = {
    status: string;
};

export const StatusPayment: React.FC<AllStatusPayment> = ({ status }) => {
    const [data, setData] = useState({} as dataStatus);

    useEffect(() => {
        const tempData = {} as dataStatus;
        if (status === "OPEN") {
            tempData.bgColor = "bg-red";
            tempData.textHead = "รอการชำระเงิน";
            tempData.textDetail1 = "กรุณาชำระเงินและแนบสลิปโอนเงินภายใน";
            tempData.textDetail2 = "คำสั่งซื้อโดยอัตโนมัติ";
            tempData.icon = <MoneyHand className="w-14" />;
        } else if (status === "SUCCESS") {
            tempData.bgColor = "bg-green";
            tempData.textHead = "คำสั่งซื้อสำเร็จแล้ว";
            tempData.textDetail1 = "ขอบคุณที่ซื้อสินค้ากับเรา";
            tempData.icon = <BoxCheckMark className="w-14" />;
        } else {
            tempData.bgColor = "bg-grey";
            tempData.textHead = "คำสั่งซื้อถูกยกเลิกแล้ว";
            tempData.textDetail1 = "คุณยกเลิกคำสั่งซื้อนี้สำเร็จแล้ว";
            tempData.icon = <DocumentDismiss className="w-14" />;
        }
        setData(tempData);
    }, [status]);

    return (
        <div className={`h-auto w-full ${data.bgColor}`}>
            <div className="flex items-center justify-between p-4">
                <div className="w-full gap-1">
                    <div className="text-base font-medium text-white">
                        {data.textHead}
                    </div>
                    <div className="text-sm font-normal	text-white">
                        {data.textDetail1}
                    </div>
                    <div className="text-sm font-normal text-white">
                        {data.textDetail2}
                    </div>
                </div>
                <div className="pr-4">{data.icon}</div>
            </div>
        </div>
    )
}