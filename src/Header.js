import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
function header() {
    const dispatch = useDispatch;
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
                <HeaderOption avatar="https://i.ibb.co/FxR1JSd/Whats-App-Image-2023-12-30-at-17-35-34-f3784fb5.jpg" title='Me' onClick={logoutofApp} />
            </div>
        </div>

    );
};

export default header