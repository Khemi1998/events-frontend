import React from 'react'
import "./RightMenu.scss"

export const RightMenu = (props) => {
const {test} = props;

    return (
        <div className='rightmenu'>
            <h1>{test}</h1>
        </div>
    )
}

export default RightMenu;