import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Albert Einstein',
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F7892297%2Fr%2Fil%2Faad990%2F685014519%2Fil_794xN.685014519_lgoj.jpg&f=1&nofb=1',
        },
        {
            name: 'Cardi B',
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hawtcelebs.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fcardi-b-at-thom-browne-show-at-paris-fashion-week-09-29-2019-11.jpg&f=1&nofb=1',
        }
    ])

    // BAD
    // const people = []
    // people.push('paul', 'joseph')

    // GOOD (Push to an array in REACT)
    // setPeople([...people, 'paul', 'joseph'])

    return (
        <div>
            <h1>Tinder Cards</h1>

            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div
                        style={{ backgroundImage: 'url(${person.url})' }}
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
