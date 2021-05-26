import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats up',
        },
        {
            name: 'Ellen',
            image: '...',
            message: 'What are you doing?',
        },
        {
            name: 'Ellen',
            image: '...',
            message: 'HELLO?!',
        }
    ])
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 06/10/2021</p>
            {messages.map((message) => (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatScreen
