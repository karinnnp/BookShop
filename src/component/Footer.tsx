import React from "react";
import { useLocation } from "react-router-dom";
import { HomeIcon, NoteIcon, NotificationIcon } from "../assets/icon";

let path: string = ''

export const MenuFooter: React.ElementType = () => {
    const location = useLocation();
    path = location.pathname

    return (
        <>
            {(path === "/" || path === "/order" || path === "/notification") &&
                <div className="w-full h-[68px] bg-white shadow-[0px_1px_6px_rgba(0,0,0,0.6)] fixed bottom-0">
                    <div className="w-full h-full sm:container sm:mx-auto sm:w-[1024px] grid grid-cols-3 text-xs">
                        <div className={`${card} ${path === "/" ? "text-red" : "text-grey-dark"} relative`} onClick={() => window.location.href = '/'}>
                            {path === "/" && <div className={line}></div>}
                            <HomeIcon className={`h-6 ${path === "/" ? "fill-red" : "fill-grey-dark"}`} />หน้าแรก
                        </div>

                        <div className={`${card} ${path === "/order" ? "text-red" : "text-grey-dark"} relative`} onClick={() => window.location.href = '/order'}>
                            {path === "/order" && <div className={line}></div>}
                            <NoteIcon className={`h-6 ${path === "/order" ? "fill-red" : "fill-grey-dark"}`} />คำสั่งซื้อ
                        </div>

                        <div className={`${card} ${path === "/notification" ? "text-red" : "text-grey-dark"} relative`} onClick={() => window.location.href = '/notification'}>
                            {path === "/notification" && <div className={line}></div>}
                            <NotificationIcon className={`h-6 ${path === "/notification" ? "fill-red" : "fill-grey-dark"}`} />การแจ้งเตือน
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

const card = "w-full flex flex-col gap-1 justify-center items-center cursor-pointer"
const line = "w-11/12 h-1 absolute top-0 bg-red rounded-b-sm"