import { ReactElement } from 'react'

type TabPannelProps = {
  isOpen: boolean
  children: ReactElement | ReactElement[]
}

const TabPannel = ({ isOpen, children, }: TabPannelProps): ReactElement => {
  return (
    <>
      {isOpen && (
          <div className="overflow-y-hidden overflow-x-hidden fixed bottom-0 left-0 z-40 w-screen flex flex-col justify-end items-center h-screen" style={{ background: "rgba(51, 51, 51, 0.8)" }}>
            <div className="w-full sm:container sm:mx-auto sm:w-[1024px] flex flex-col justify-between gap-4 bg-white p-4 rounded-t-xl z-50">
              {children}
            </div>
          </div>
      )}
    </>
  )
}

export default TabPannel
