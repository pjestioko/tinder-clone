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
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glamour.com%2Fphotos%2F5ac94d17f8ce761b3774046b%2F16%3A9%2Fw_1280%2Cc_limit%2Fcardi-b-getty-2.jpg%3Fmbid%3Dsocial_retweet&f=1&nofb=1'
        },
    ]);

    // BAD
    // const people = []
    // people.push('paul', 'joseph')

    // GOOD (Push to an array in REACT)
    // setPeople([...people, 'paul', 'joseph'])

    return (
        <div>
            <h1>Tinder Cards</h1>

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
    )
}

export default TinderCards
