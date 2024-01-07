import React from 'react'
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function Post({ name, description, message, photourl }) {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpOffAltOutlinedIcon} title="like"/>
                <InputOption Icon={CommentOutlinedIcon} title="Comment"/>
                <InputOption Icon={LoopOutlinedIcon} title="Repost"/>
                <InputOption Icon={SendOutlinedIcon} title="Share"/>
            </div>
        </div>
    )
}

export default Post