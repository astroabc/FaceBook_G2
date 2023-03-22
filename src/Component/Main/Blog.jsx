import React from 'react'
import { MdInsertEmoticon, MdVideoCall } from 'react-icons/md';
import { ImFilePicture } from 'react-icons/im';
import PostEdit from './Blog/PostEdit';
import Post from './Blog/Post';


const Blog = () => {
    return (
        <div className='grow w-full h-full flex justify-center'>
            <div className='w-[680px] flex flex-col gap-3 rounded-md'>
                <div className='grid grid-rows-2 rounded-md px-3 bg-white w-full h-[124px]'>
                    <div className='row-span-1 flex flex-row gap-2 items-center px-3'>
                        <div className='w-9 h-9 rounded-full bg-slate-300'></div>
                        <input className='grow py-2 px-3 bg-slate-200 rounded-full outline-none' placeholder='Write something' type="text" name="" id="" />
                    </div>
                    <div className='row-span-1 grid grid-cols-3 px-12'>
                        <PostEdit img={<MdVideoCall size={28} />} text={'Live Video'} />
                        <PostEdit img={<ImFilePicture size={23} />} text={'Picture/Video'} />
                        <PostEdit img={<MdInsertEmoticon size={28} />} text={'Mod/Activity'} />
                    </div>
                </div>
                <div className='bg-white rounded-md'>
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default Blog