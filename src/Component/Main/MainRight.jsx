import React, { useContext } from 'react'
import { MdOutlineVideoCall } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import Friend from './ChatFriend.jsx/Friend'
import { MainContext } from '../Contexts/MainContext'

const MainRight = () => {
  const {allChatUsers} = useContext(MainContext)
  return (
    <div className='w-[360px] pr-8 xl:static right-0 fixed md:hidden overflow-scroll'>
      <div className='grid grid-rows-3 w-full h-[360px]'>
        <div className='col-span-1 flex flex-row items-center gap-2'>
          <div className='w-[120px] h-[120px] rounded-md bg-slate-400'></div>
          <div className='grow'>Quang cao 1</div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <span>Friends</span>
          <div className='flex flex-row gap-4'>
            <MdOutlineVideoCall size={26} />
            <AiOutlineSearch size={23} />
            <FiMoreHorizontal size={23} />
          </div>
        </div>
        <div className='h-[500px] flex flex-col w-full pt-3'>
          {allChatUsers.map((el, id)=>(<Friend key={id} img={el.image} name={el.name} id={el.id}/>))}
        </div>
      </div>
    </div>
  )
}

export default MainRight