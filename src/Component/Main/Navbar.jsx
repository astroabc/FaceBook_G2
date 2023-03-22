import React from 'react'
import { BsBellFill, BsFacebook, BsMessenger } from 'react-icons/bs';
import { FiUsers } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineRemoveFromQueue } from "react-icons/md";
import { IoStorefrontOutline, IoGameControllerOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='fixed z-30 w-full shadow-md bg-[#ffffff] h-14 flex flex-row justify-between items-center px-8 text-gray-500'>
            <div className='flex flex-row items-center w-[400px] min-w-fit gap-2 justify-items-start'>
                <span className='text-[#129af6]'><BsFacebook size={35} /></span>
                <input className="py-2 outline-none pl-4 bg-slate-100 rounded-full lg:hidden" id="default-search" planpceholder="Search..." />
            </div>
            <div className='main-switch-page flex flex-row h-full w-[680px]'>
                <button><HiOutlineHome size={25} /></button>
                <button><FiUsers size={25} /></button>
                <button><MdOutlineRemoveFromQueue size={25} /></button>
                <button><IoStorefrontOutline size={25} /></button>
                <button><IoGameControllerOutline size={25} /></button>
            </div>

            <div className='main-icon flex  flex-row w-[400px] min-w-fit gap-4 justify-end items-center'>
                <button><CgMenuGridO size={30} /></button>
                <button><BsMessenger size={20} /></button>
                <button><BsBellFill size={20} /></button>
                <button>Icon</button>
            </div>
        </div>
    )
}

export default Navbar