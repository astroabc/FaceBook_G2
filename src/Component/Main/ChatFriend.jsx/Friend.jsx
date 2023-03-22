import React from 'react'

const Friend = ({ img, name }) => {
    return (
        <div className='flex gap-3 pt-3 items-center'>
            <div className='w-12 h-12 rounded-full grid place-content-center'>{img}</div>
            <span>{name}</span>
        </div>
    )
}

export default Friend