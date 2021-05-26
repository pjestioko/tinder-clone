import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return <div className="chats">
        <Chat
            name='Gigi'
            message='What are you doing today?'
            timeStamp='30 minutes ago'
            profilePic='...'
        />
        <Chat
            name='Jojo'
            message='Hi, nice to meet you.'
            timeStamp='40 seconds ago'
            profilePic='...'
        />
        <Chat
            name='May'
            message='What are you doing tomorrow?'
            timeStamp='1 hour ago'
            profilePic='...'
        />
        <Chat
            name='Jayson'
            message='Exactly! I was thinking the same.'
            timeStamp='55 minutes ago'
            profilePic='...'
        />
    </div>;
}

export default Chats
