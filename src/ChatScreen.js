import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Zuck',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.usmagazine.com%2Fwp-content%2Fuploads%2F2020%2F07%2FMark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpg%3Fcrop%3D557px%252C82px%252C896px%252C471px%26resize%3D1200%252C630%26ssl%3D1%26quality%3D86%26strip%3Dall&f=1&nofb=1',
            message: 'Whats up',
        },
        {
            name: 'Zuck',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.usmagazine.com%2Fwp-content%2Fuploads%2F2020%2F07%2FMark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpg%3Fcrop%3D557px%252C82px%252C896px%252C471px%26resize%3D1200%252C630%26ssl%3D1%26quality%3D86%26strip%3Dall&f=1&nofb=1',
            message: 'What are you doing?',
        },
        {
            name: 'Zuck',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.usmagazine.com%2Fwp-content%2Fuploads%2F2020%2F07%2FMark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpg%3Fcrop%3D557px%252C82px%252C896px%252C471px%26resize%3D1200%252C630%26ssl%3D1%26quality%3D86%26strip%3Dall&f=1&nofb=1',
            message: 'HELLO?!',
        },
        {
            message: 'Hi, Zuck. Sorry I am late to the party',
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH Zuck ON 06/10/2021
            </p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen
