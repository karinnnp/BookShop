import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowBackIcon, CartIcon, SearchIcon } from '../assets/icon'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { resetToSearch, setNewSearch } from '../redux/slice/search'
import { InputSearch } from './Input'

type NavbarProps = {}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const dispatch = useAppDispatch()
    const order = useAppSelector((state) => state.order)
    const location = useLocation()
    const path = location.pathname
    const scrollPosition = useScrollPosition()
    const [textHeader, setTextHeader] = useState('')
    const [search, setSearch] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        summaryOrder()
    }, [order])

    useEffect(() => {
        firstRedux()
        header()
    }, [path])

    useEffect(() => {
        if (search === '') {
            dispatch(resetToSearch())
        }
    }, [search])

    const enterToSearch = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(setNewSearch({ text: search }))
        }
    }

    const clickToSearch = () => {
        dispatch(setNewSearch({ text: search }))
    }

    const summaryOrder = () => {
        let sum = 0
        // order.orders.forEach((v) => {
        //   const sumStock = Object.values(v.products).reduce((sum, object) => {
        //     return sum + object.length
        //   }, 0)
        //   sum += sumStock
        // })
        setCount(sum)
    }

    const header = () => {
        if (path.includes('/cart')) {
            setTextHeader('ตะกร้าสินค้า')
        } else if (path.includes('/payment')) {
            setTextHeader('ชำระเงินด้วย QR CODE')
        } else if (path.includes('/product')) {
            setTextHeader('สินค้า')
        } else if (path.includes('/notification')) {
            setTextHeader('การแจ้งเตือน')
        } else if (path === '/profile') {
            setTextHeader('ข้อมูลส่วนตัว')
        } else if (path === '/order') {
            setTextHeader('คำสั่งซื้อ')
        } else if (path === '/history') {
            setTextHeader('ทำการสั่งซื้อ')
        } else if (path.includes('/order')) {
            setTextHeader('รายละเอียดคำสั่งซื้อ')
        } else if (path.includes('/shipping')) {
            setTextHeader('แก้ไขข้อมูลการจัดส่ง')
        } else if (path.includes('/')) {
            setTextHeader('')
        }
    }

    const goToBack = () => {
        if (path.includes('/orderSummary')) {
            window.location.href = '/cart'
        } else if (path.includes('/shipping') || path.includes('/selectShipping')) {
            window.location.href = '/orderSummary'
        } else if (path.includes('/payment/slip') || (path !== "/order" && path.includes('/order'))) {
            window.location.href = '/order'
        } else { // path.includes('/product') || path.includes('/cart') || path.includes('/order')
            window.location.href = '/'
        }
    }

    const firstRedux = () => {
        // const newData = {} as OrderState
        // const send = [] as OrdersState[]
        // if (
        //     order.orders.length > 0 &&
        //     !path.includes('/orderSummary') &&
        //     !path.includes('/shipping') &&
        //     !path.includes('/selectShipping') &&
        //     !path.includes('/payment/qrcode')
        // ) {
        //     Object.entries(order).forEach(([key, value]) => {
        //         value.forEach((item: OrdersState) => {
        //             const dataProduct = {} as { [key: number]: ProductState[] }
        //             Object.entries(item.products).forEach(([k, v]) => {
        //                 const dataSkus = [] as ProductState[]
        //                 v.forEach((s) => {
        //                     dataSkus.push({ ...s, selected: false })
        //                 })
        //                 dataProduct[Number(k)] = dataSkus.sort((a, b) => a.skuId - b.skuId)
        //             })
        //             send.push({
        //                 ...item,
        //                 products: Object.fromEntries(Object.entries(dataProduct).sort()),
        //             })
        //         })
        //         newData[key as keyof OrderState] = send.sort((a, b) => a.merchantId - b.merchantId)
        //     })
        //     dispatch(setNewOrder(newData))
        // }
    }

    const bg = (scrollPosition > 0 && path.includes('/product')) || (!path.includes('/product'))

    const goToPage = (page: string) => {
        localStorage.setItem('GoToBack', page)
        window.location.href = page
    }

    return (
        <>
            <nav className={`fixed top-0 z-40 h-16 w-full ${bg && 'bg-white shadow-[0px_1px_6px_rgba(0,0,0,0.1)]'}`}>
                <div className='w-full h-full sm:container sm:mx-auto sm:w-[1024px] flex items-center justify-between p-5'>
                    {path === '/' ? (
                        scrollPosition === 0 ? (
                            <a href='/' className='flex items-center gap-3'>
                                <div className='text-2xl font-bold leading-10 text-red'>มาร์เก็ตเพลส</div>
                            </a>
                        ) : (
                            <div className='w-full pr-4'>
                                <InputSearch
                                    bgStyle='greyLight2'
                                    placeholder='ค้นหาสินค้าและร้านค้า'
                                    handleChange={(e: { target: { value: React.SetStateAction<string> } }) => setSearch(e.target.value)}
                                    handleKeydown={(e: any) => enterToSearch(e)}
                                    inputValue={search}
                                    handleClick={clickToSearch}
                                />
                            </div>
                        )
                    ) : (
                        <button className='flex h-9 w-9 items-center justify-center' onClick={() => goToBack()}>
                            <ArrowBackIcon className={`h-6 fill-red`} />
                        </button>
                    )}

                    {(scrollPosition > 0 || bg) && (
                        <div className='text-xl font-medium text-grey-dark'>{textHeader}</div>
                    )}

                    {(path === '/' || path.includes('/product')) ? (
                            <button className={`relative flex h-9 w-9 items-center justify-center ${scrollPosition === 0 && 'rounded-lg bg-black/40'}`} onClick={() => goToPage('/cart')}>
                                <CartIcon className={`h-6 ${scrollPosition > 0 ? 'fill-red' : 'fill-white'}`} />
                                {count > 0 && (
                                    <span className={`absolute flex items-center justify-center rounded-full bg-red px-1.5 py-0.5 ${scrollPosition > 0 ? 'top-[-6px] right-0' : 'top-[-8px] right-[-8px]'} text-center text-xxs leading-tight text-white`}>
                                        {count < 100 ? count : '99+'}
                                    </span>
                                )}
                            </button>
                    ) : (
                        <div className='h-9 w-9'></div>
                    )}
                </div>
            </nav>

            {scrollPosition === 0 && path === '/' && (
                <div className='fixed top-[55px] z-40 h-14 w-full bg-white py-2.5 px-5'>
                    <div className='w-full h-full sm:container sm:mx-auto sm:w-[1024px] flex items-center justify-between sm:p-5'>
                        <InputSearch
                            bgStyle='greyLight2'
                            placeholder='ค้นหาสินค้าและร้านค้า'
                            handleChange={(e: { target: { value: React.SetStateAction<string> } }) => setSearch(e.target.value)}
                            handleKeydown={(e: any) => enterToSearch(e)}
                            inputValue={search}
                            handleClick={clickToSearch}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
