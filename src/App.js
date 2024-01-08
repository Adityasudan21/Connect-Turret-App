import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widget from "./Widget";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice";
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photourl: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []); //useEffect Problem is solved by removing the square paranthesis
  return (
    <div className="app">
      { /* Header   */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          {/* Siderbar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widget />
        </div>
      )
      }
    </div >
  );
}

export default App;
