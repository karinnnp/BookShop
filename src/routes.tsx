import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MenuFooter } from './component/Footer'
import { Navbar } from './component/Navbar'
import { Cart } from './pages/cart/Cart'
import { Home } from './pages/home/Home'
import { Product } from './pages/product/Product'
import { Notification } from './pages/notification/Notification'
import { Profile } from './pages/profile/Profile'
import { Order } from './pages/order/Order'
import { OrderDetail } from './pages/order/components/OrderDetail'
import { History } from './pages/history/History'

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
    { path: '/cart', element: <Cart /> },
    { path: '/product/:productId', element: <Product /> },

    { path: '/notification', element: <Notification /> },
    { path: '/profile', element: <Profile /> },
    { path: '/order', element: <Order /> },
    { path: '/order/:orderId', element: <OrderDetail /> },
    { path: '/history', element: <History /> },
  ]

  return (
    <Router>
      <div className='w-full sm:container relative sm:mx-auto flex flex-col items-center sm:w-[1024px]'>
        <Navbar />
        <div className={`h-[100vh] w-full flex-1 overflow-y-auto ${path === '/' ? 'pt-[110px]' : path.includes('/product') ? 'pt-0' : 'pt-16'}`}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
        <MenuFooter />
      </div>
    </Router>
  )
}

export default Routed
