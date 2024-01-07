import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widget from "./Widget";

function App() {
  return (
    <div className="app">
      { /* Header   */}
      <Header />
      {/* App Body */}
      <div className='app_body'>
        {/* Siderbar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widget/>
        
      </div>
    </div>
  );
}

export default App;
