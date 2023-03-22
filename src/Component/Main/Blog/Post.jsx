import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { SlLike } from 'react-icons/sl';
import { FcLike } from 'react-icons/fc';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BiComment, BiLike } from 'react-icons/bi';


const Post = () => {
    return (
        <div className='w-full px-4 py-2'>
            <div className='flex flex-row items-center justify-between gap-3'>
                <div className='w-12 h-12 rounded-md bg-slate-300 relative z-20'>
                    <div className='w-11 h-11 rounded-md bg-slate-400 absolute top-0 left-0'></div>
                    <div className='w-6 h-6 rounded-full absolute bg-slate-600 bottom-0 right-0'></div>
                </div>
                <div className='flex flex-col grow'>
                    <b>History of manufacturing</b>
                    <div className='flex flex-row items-center gap-3'>
                        <p>Thanh Tung</p>
                        <i className='text-sm'>11 hours</i>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button><FiMoreHorizontal size={25} /></button>
                    <button><IoClose size={25} /></button>
                </div>
            </div>

            <div>
                <p className='py-3'>Pastas are divided into two broad categories: dried (pasta secca) and fresh (pasta fresca). Most dried pasta is produced commercially via an extrusion process, although it can be produced at home. Fresh pasta is traditionally produced by hand, sometimes with the aid of simple machines.[3] Fresh pastas available in grocery stores are produced commercially by large-scale machines.</p>
                <div className='w-full bg-cover'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg" alt="" />
                </div>
            </div>

            <div>
                <div className='flex flex-row justify-between items-center px-2 py-2'>
                    <div className='flex items-center gap-2'>
                        <SlLike size={18} />
                        <FcLike size={20} />
                        <p>123</p>
                    </div>
                    <div><span>123</span> Comments</div>
                </div>
                <hr />
                <div className='flex flex-row text-center justify-around py-1'>
                    <button className='flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-3 rounded-md'><BiLike size={23} /> Like</button>
                    <button className='flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-3 rounded-md'><BiComment size={23} /> Comment</button>
                    <button className='flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-3 rounded-md'><FaFacebookMessenger size={23} /> Share</button>
                </div>
            </div>
            <hr />

            <div className='py-3'>
                <div className='flex flex-row gap-3'>
                    <div className='w-9 h-9 rounded-full bg-slate-300'><img src="" alt="" /></div>
                    <div className='flex flex-col'>
                        <div className=' flex flex-col bg-slate-200 w-fit px-4 py-1 rounded-md'>
                            <b>Thanh Tung</b>
                            <p className='pl-3'>Okay</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='text-sm font-semibold'>Like</button>
                            <button className='text-sm font-semibold'>Response</button>
                            <i className='text-sm'>3 hours</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post