import React from 'react'
import { MdOutlineVideoCall } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import Friend from './ChatFriend.jsx/Friend'

const MainRight = () => {
  return (
    <div className='w-[300px] right-0 fixed md:hidden overflow-auto'>
      <div className='grid grid-rows-3 w-full h-[360px]'>
        <div className='col-span-1 flex flex-row items-center gap-2'>
          <div className='w-[120px] h-[120px] rounded-md bg-slate-400'></div>
          <div className='grow'>Quang cao 1</div>
        </div>
      </div>

      <div>
        <div className='flex justify-between'>
          <span>Friends</span>
          <div className='flex flex-row gap-4'>
            <MdOutlineVideoCall size={23} />
            <AiOutlineSearch size={23} />
            <FiMoreHorizontal size={23} />
          </div>
        </div>
        <div className=''>
          <Friend img={'icon'} name={'ABC'} />
        </div>
      </div>
    </div>
  )
}

export default MainRight