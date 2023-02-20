import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MenuFooter } from './component/Footer'
import { Navbar } from './component/Navbar'
import { Cart, Home, Product, Notification, Payment, Order, Login } from './pages'
import { OrderDetail } from './pages/order/components/OrderDetail'

let path = window.location.pathname
let isRun = true
const Routed: React.FC = () => {
  useEffect(() => {
    if (isRun) {
      path = window.location.pathname
    }
    return () => {
      isRun = false
    }
  }, [])

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Login /> },
    { path: '/cart', element: <Cart /> },
    { path: '/product/:productId', element: <Product /> },
    { path: '/notification', element: <Notification /> },
    { path: '/payment/:paymentId', element: <Payment /> },
    { path: '/order', element: <Order /> },
    { path: '/order/:orderId', element: <OrderDetail /> },
  ]

  return (
    <Router>
      <div className='w-full sm:container relative sm:mx-auto flex flex-col items-center sm:w-[1024px]'>
        <Navbar />
        <div className={`h-[100vh] w-full flex-1 overflow-y-auto ${path === '/' ? 'pt-[110px]' : (path === "/login" || path === "/register" || path.includes('/product')) ? 'pt-0' : 'pt-16'}`}>
          <Routes>
            {routes.map(({ path, element }) => {
              return (
                <Route key={path} path={path} element={element} />
              )
            })}
          </Routes>
        </div>
        <MenuFooter />
      </div>
    </Router>
  )
}

export default Routed
