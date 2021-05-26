import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return <div className="chats">
        <Chat
            name='Gigi'
            message='Hello Australia'
            timeStamp='30 minutes ago'
            profilePic='...'
        />
        <Chat
            name='Jojo'
            message='Hello Florida'
            timeStamp='40 seconds ago'
            profilePic='...'
        />
        <Chat
            name='May'
            message='Hello Hawaii'
            timeStamp='1 hour ago'
            profilePic='...'
        />
        <Chat
            name='Jayson'
            message='Hello California'
            timeStamp='55 minutes ago'
            profilePic='...'
        />
    </div>;
}

export default Chats
