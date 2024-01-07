import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widget from "./Widget";
import { useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
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
