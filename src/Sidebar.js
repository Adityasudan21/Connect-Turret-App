import React from 'react';
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';
function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>
                #
            </span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg"></img>
                <Avatar className="sidebar_avatar" src="https://i.ibb.co/FxR1JSd/Whats-App-Image-2023-12-30-at-17-35-34-f3784fb5.jpg" />
                <h2>Aditya Sudan</h2>
                <h4>adityasudan21@gmail.com</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statnumber'>100</p>
                </div>
                <div className='sidebar_stat'>
                    <p>views on post</p>
                    <p className='sidebar_statnumber'>90</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recents</p>
                    {recentItem('reactjs')}
                    {recentItem("MongoDB")}
                    {recentItem("Vue")}
                    {recentItem("Kubernettes")}
                    {recentItem("TailwindCSS")}
            </div>
        </div>
    )
};

export default Sidebar;