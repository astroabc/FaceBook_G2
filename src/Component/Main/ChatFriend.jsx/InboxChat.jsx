import React, { useContext } from 'react'
import { AiFillLike, AiOutlineFileGif, AiOutlineVideoCamera } from 'react-icons/ai';
import { IoIosCall, IoMdAddCircleOutline, IoMdClose } from 'react-icons/io';
import { VscChromeMinimize } from 'react-icons/vsc';
import { BsImages } from 'react-icons/bs';
import { RiStickyNoteLine } from 'react-icons/ri';
import { MainContext } from '../../Contexts/MainContext';

const InboxChat = ({id}) => {
    const { handleCloseInboxChat } = useContext(MainContext)
    return (
        <div id={id} className='w-[330px] h-[425px] flex-none bg-white rounded-t-lg flex flex-col justify-between shadow-xl bottom-0 right-16'>
            <div className='flex flex-row justify-between items-center h-12 w-full px-2 border-b-2 border-solid border-gray-300'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='h-8 w-8 rounded-full bg-slate-500'></div>
                    <div className='flex flex-col'>
                        <b>User {id}</b>
                        <small>Active</small>
                    </div>
                </div>
                <div className='text-gray-400 flex gap-1'>
                    <button className='w-6 h-6 rounded-full hover:bg-slate-200'><IoIosCall size={22} /></button>
                    <button className='w-6 h-6 rounded-full hover:bg-slate-200'><AiOutlineVideoCamera size={22} /></button>
                    <button onClick={() => handleCloseInboxChat(id)} className='w-6 h-6 rounded-full hover:bg-slate-200'><VscChromeMinimize size={22} /></button>
                    <button onClick={() => handleCloseInboxChat(id)} className='w-6 h-6 rounded-full hover:bg-slate-200'><IoMdClose size={25} /></button>
                </div>
            </div>

            <div className='flex flex-col grow justify-end py-3'>
                <div className='flex justify-between w-fit gap-2 pl-3'>
                    <div className='h-7 w-7 rounded-full bg-slate-300'></div>
                    <p className='max-w-[250px]'>Go go goGo go goGo go goGo go goGo go goGo go goGo go goGo go go</p>
                </div>
                <div className='flex justify-end gap-2 px-3'>
                    <p className='max-w-[250px]'>Go go goGo go goGo go goGo go goGo go goGo go goGo go goGo go go</p>
                </div>
            </div>

            <div className='h-12 w-full text-gray-400 flex items-center justify-between px-2'>
                <button className='w-6 h-6 rounded-full hover:bg-slate-200'><IoMdAddCircleOutline size={25}/></button>
                <button className='w-6 h-6 rounded-full hover:bg-slate-200'><BsImages size={23}/></button>
                <button className='w-6 h-6 rounded-full hover:bg-slate-200'><RiStickyNoteLine size={23}/></button>
                <button className='w-6 h-6 rounded-full hover:bg-slate-200'><AiOutlineFileGif size={23}/></button>
                <input className='w-40 py-2 px-3 outline-none rounded-full bg-slate-200' placeholder='Aa' type="text" name="" id="" />
                <button className='w-6 h-6 rounded-full hover:bg-slate-200'><AiFillLike size={25}/></button>
            </div>
        </div>
    )
}

export default InboxChat