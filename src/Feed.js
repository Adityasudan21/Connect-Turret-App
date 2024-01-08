import React, { useEffect, useState } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import firebase from 'firebase/compat/app';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            );
    }, []);
    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    };
    return (
        <div className='feed'>
            <div className="feed_post">
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputoptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove enterAnimation="fade" leaveAnimation="fade" duration={1000} easing='ease-in-out'>
                {posts.map(({ id, data: { name, description, message, photoURL } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoURL={photoURL}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed