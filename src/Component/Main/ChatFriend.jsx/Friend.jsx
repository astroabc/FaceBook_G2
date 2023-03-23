import React, { useContext } from 'react'
import { MainContext } from '../../Contexts/MainContext'

const Friend = ({ img, name, id }) => {
    const {onClickFriend} = useContext(MainContext)
    return (
        <div onClick={() =>onClickFriend(id)} className='flex cursor-pointer border-b-2 py-2 border-solid border-gray-200 gap-3 items-center w-full'>
            <div><img className='w-10 h-10 rounded-full grid place-content-center' src={img} alt="" /></div>
            <p className='text-black'>{name}</p>
        </div>
    )
}

export default Friend