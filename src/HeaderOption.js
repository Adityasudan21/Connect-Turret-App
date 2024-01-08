import React from 'react'
import "./HeaderOption.css"
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption_icon' />}
            {avatar ? (
                <Avatar className="headerOption_avatar" src={user?.photoURL} >{user?.displayName ? user?.displayName[0] : ''}</Avatar> //This Avatar Is not working for the Person and is not taking the photoURL src={user?.photourl}
            ) : (null)}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption