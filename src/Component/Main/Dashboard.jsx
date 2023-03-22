import React from 'react'
import Main from './Main'
import Navbar from './Navbar'

const Dashboard = () => {
    return (
        <div className='w-screen h-screen bg-[#f0f2f5]'>
            <Navbar />
            <Main />
        </div>
    )
}

export default Dashboard