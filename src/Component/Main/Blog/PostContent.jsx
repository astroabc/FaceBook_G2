import React, { useContext } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { MainContext } from '../../Contexts/MainContext';

const PostContent = () => {
    const { setShowPost } = useContext(MainContext)

    return (
        <div className='fixed z-30 w-full h-full flex justify-center items-center bg-slate-200 bg-opacity-75'>
            <div className='w-[498px] h-[425px] rounded-lg bg-white bg-opacity-100 flex flex-col justify-start'>
                <div className='flex w-full h-[60px] items-center px-4'>
                    <b className='grow text-center text-xl'>Create post</b>
                    <button onClick={() => setShowPost(false)} className='w-8 h-8 rounded-full bg-slate-300 flex justify-center items-center'><MdOutlineClose size={25} /></button>
                </div>
                <hr />
                <div className='flex justify-start gap-3 items-center pl-4 pt-3'>
                    <div className='h-10 w-10 rounded-full bg-slate-300'>
                        <img src="" alt="" />
                    </div>
                    <b>Thanh Tung</b>
                </div>
                <div className='flex flex-col gap-2 py-3 items-center'>
                    <textarea className='w-full outline-none px-6 text-xl' placeholder='Write something...' name="" id="" cols="30" rows="6"></textarea>
                    <div className='h-14 w-[90%] rounded-lg border-[2px] border-solid border-gray-200'>
                        
                    </div>
                    <button className='bg-[#1b74e4] w-[80%] rounded-full text-white text-lg py-2'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostContent