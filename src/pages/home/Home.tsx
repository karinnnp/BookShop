import { ReactElement, useEffect, useState } from 'react'
import CardProduct from '../../component/CardProduct'
import { mock } from '../../data'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setLoading } from '../../redux/slice/loading'
import { ProductsType } from '../../types/product'

export const Home = (): ReactElement => {
  const dispatch = useAppDispatch()
  const search = useAppSelector((state) => state.search)
  const [data, setData] = useState<ProductsType[]>([])

  useEffect(() => {
    dispatch(setLoading(true))
    const sort = mock.filter(item => item.name.includes(search.text) || item.author.includes(search.text)).sort()

    setData(sort)
    dispatch(setLoading(false))
  }, [search.text])

  return (
    <div className='h-screen pt-4'>
      <div className='w-full grid justify-center gap-2 max-sm:grid-cols-2 sm:grid-cols-3  md:grid-cols-4'>
        {data.map((p, i) => {
          return (
            <CardProduct key={i} product={p} handleClick={() => window.location.href = `/product/${p.id}`} />
          )
        })}
      </div>
    </div>
  )
}