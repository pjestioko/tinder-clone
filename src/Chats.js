import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return <div className="chats">
        <Chat
            name='Zuck'
            message='What are you doing today?'
            timeStamp='30 minutes ago'
            profilePic='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.usmagazine.com%2Fwp-content%2Fuploads%2F2020%2F07%2FMark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpg%3Fcrop%3D557px%252C82px%252C896px%252C471px%26resize%3D1200%252C630%26ssl%3D1%26quality%3D86%26strip%3Dall&f=1&nofb=1'
        />
        <Chat
            name='Doge'
            message='Hi, nice to meet you.'
            timeStamp='40 seconds ago'
            profilePic='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mycrafts.com%2Fi%2F1%2F7%2F100%2Fwow-doge-dog-meme-3d-drawing-iYVd-o.jpg&f=1&nofb=1'
        />
        <Chat
            name='Grumpy Cat'
            message='What are you doing tomorrow?'
            timeStamp='1 hour ago'
            profilePic='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs-images.forbes.com%2Fclareoconnor%2Ffiles%2F2017%2F09%2Fgrumpy-cat-GettyImages-519250942-1200x800.jpg&f=1&nofb=1'
        />
        <Chat
            name='Barack'
            message='Free for drinks this weekend?'
            timeStamp='55 minutes ago'
            profilePic='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.englishspeecheschannel.com%2Fwp-content%2Fuploads%2F2018%2F08%2FBarack-Obama.jpg%3Ffit%3D1920%252C1080%26ssl%3D1&f=1&nofb=1'
        />
    </div>;
}

export default Chats
