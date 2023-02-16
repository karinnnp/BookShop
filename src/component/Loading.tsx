import { ReactElement } from 'react'
import ReactLoading from 'react-loading'
import { useAppSelector } from '../hooks/redux'

const Loading = (): ReactElement => {
  const { loading } = useAppSelector((state) => state.loading)

  return (
    <>
      {loading && (
        <div className='fixed top-0 left-0 bottom-0 right-0 z-40 bg-black opacity-80 flex justify-center items-center '>
          <ReactLoading type="spinningBubbles" color="#E32321" width="18%" className='flex justify-center items-center' />
        </div>
      )}
    </>
  )
}

export default Loading
