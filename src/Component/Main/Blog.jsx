import React, { useContext } from 'react'
import { MdInsertEmoticon, MdVideoCall } from 'react-icons/md';
import { ImFilePicture } from 'react-icons/im';
import PostEdit from './Blog/PostEdit';
import Post from './Blog/Post';
import { MainContext } from '../Contexts/MainContext';
import InboxChat from './ChatFriend.jsx/InboxChat';

const Blog = () => {
    const { onTargetPost, showMessage} = useContext(MainContext)
    return (
        <div className='grow h-full w-full flex justify-center relative'>
            <div id='inbox' className=' fixed bottom-0 right-[400px] z-20 h-[425px] flex flex-row-reverse gap-1 max-w-[500px]'>
                {showMessage.status === true && (showMessage.idMess.map((el, id) =>(<InboxChat key={id} id={el}/>)))}
            </div>
            <div className='w-[680px] flex flex-col gap-3 rounded-md'>
                <div className='grid grid-rows-2 rounded-md px-3 bg-white w-full h-[124px]'>
                    <div className='row-span-1 flex flex-row gap-2 items-center px-3'>
                        <div className='w-9 h-9 rounded-full bg-slate-300'></div>
                        <input onClick={onTargetPost} className='post-content grow py-2 px-3 bg-slate-200 rounded-full outline-none' placeholder='Write something' type="text" name="" id="" />
                    </div>
                    <div className='row-span-1 grid grid-cols-3 px-12'>
                        <PostEdit img={<MdVideoCall size={28} />} text={'Live Video'} />
                        <PostEdit img={<ImFilePicture size={23} />} text={'Picture/Video'} />
                        <PostEdit img={<MdInsertEmoticon size={28} />} text={'Mod/Activity'} />
                    </div>
                </div>
                <div className='bg-white rounded-md'>
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}
export default Blog