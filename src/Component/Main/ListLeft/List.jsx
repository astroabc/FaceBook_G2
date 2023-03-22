import React from 'react'

const List = ({ img, text }) => {
    return (
        <li>
            <div>{img}</div>
            <span>{text}</span>
        </li>
    )
}

export default List