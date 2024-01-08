import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
function Header() {
    const dispatch = useDispatch();
    const logoutofApp = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://i.ibb.co/ZVcTWqm/1ax6e5c9.png' alt=''></img>
                <div className='header_search'>
                    <SearchIcon />
                    <input type='text'>
                    </input>
                </div>
            </div>
            <div className='header_right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={Diversity3Icon} title='My Friends' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={true} title='Me' onClick={logoutofApp} />
            </div>
        </div>

    );
};

export default Header