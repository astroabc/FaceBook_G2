import React, { useContext } from 'react'
import MainLeft from './MainLeft'
import Blog from './Blog'
import MainRight from './MainRight'
import { MainContext } from '../Contexts/MainContext'
import PostContent from './Blog/PostContent'
// import Friend from './ChatFriend.jsx/Friend'
// import InboxChat from './ChatFriend.jsx/InboxChat'

const Main = () => {
    const { showPost } = useContext(MainContext)
    return (
        <div>
            {showPost === true && <PostContent />}
            <div className='bg-[#f0f2f5] w-full h-fit pt-20 px-8 flex flex-row relative'>
                <MainLeft />
                <Blog/>
                <MainRight />
            </div>
        </div>
    )
}

export default Main