import React from 'react'

const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className='w-full overflow-x-hidden relative ' >
    {children}
    <div className=" w-[800px] h-[100%] bg-background-blur-1 rounded-full absolute -top-40 left-[30rem] -z-20  blur-[282px] opacity-[.1]"></div>
    <div className="w-[800px] h-[100%] bg-background-blur-2 rounded-full absolute -top-40 -z-20  blur-[282px] opacity-[.1]"></div>
    </div>
    
    </>
  )
}

export default Wrapper