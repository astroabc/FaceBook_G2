import React from 'react'
import MainLeft from './MainLeft'
import Blog from './Blog'
import MainRight from './MainRight'

const Main = () => {
    return (
        <div className='bg-[#f0f2f5] w-full h-[2000px] pt-20 px-8 flex flex-row'>
            <MainLeft />
            <Blog />
            <MainRight />
        </div>
    )
}

export default Main