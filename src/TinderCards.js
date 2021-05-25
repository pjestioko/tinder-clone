import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Albert Einstein',
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F7892297%2Fr%2Fil%2Faad990%2F685014519%2Fil_794xN.685014519_lgoj.jpg&f=1&nofb=1'
        },
        {
            name: 'Cardi B',
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2020%2F03%2F19%2Fcardi-b-coronavirus_wide-15ee378d9aefdbd71894d3a2ad50332e8843a2c4-s1100.jpg&f=1&nofb=1'
        },
        {
            name: 'Pepe the Frog',
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffsmedia.imgix.net%2Fd7%2Fc4%2F7d%2F30%2Fbb49%2F4dd1%2Fbd48%2F88338dfc87a3%2Fpepe-the-frog-2png.png&f=1&nofb=1',
        }
    ]);

    // BAD
    // const people = []
    // people.push('paul', 'joseph')

    // GOOD (Push to an array in REACT)
    // setPeople([...people, 'paul', 'joseph'])

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
