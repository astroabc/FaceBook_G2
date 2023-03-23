import React from 'react'
import { FaUserFriends } from 'react-icons/fa';
import { IoStorefrontOutline } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { HiUserGroup } from 'react-icons/hi';
import { TiDeviceDesktop } from 'react-icons/ti';
import { MdExpandMore } from 'react-icons/md';
import List from './ListLeft/List';


const MainLeft = () => {
  return (
    <div className='w-[300px] fixed shrink xl:static lg:hidden'>
      <div className=''>
        <ul className='main-left-1 flex flex-col gap-6 py-4'> 
          <List img={'Icon'} text={'Username'} />
          <List img={<FaUserFriends size={25} />} text={'Friend'} />
          <List img={<IoStorefrontOutline size={25} />} text={'Marketplace'} />
          <List img={<ImNewspaper size={25} />} text={'News Feed'} />
          <List img={<HiUserGroup size={25} />} text={'Group'} />
          <List img={<TiDeviceDesktop size={25} />} text={'Watch'} />
          <List img={<MdExpandMore size={25} />} text={'More'} />
        </ul>
      </div>
      <hr />
      <div>
        <ul className='main-left-2 py-4 flex flex-col gap-4'>
          <li>
            <div>Icon</div>
            <span>Group 1</span>
          </li>
          <li>
            <div>Icon</div>
            <span>Group 2</span>
          </li>
          <li>
            <div>Icon</div>
            <span>Group 3</span>
          </li>
          <li>
            <div>Icon</div>
            <span>Group 4</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainLeft