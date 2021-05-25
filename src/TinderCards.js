import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    // piece of code which runs based on a condition (if statement on drugs)
    useEffect(() => {
        // this is where the code runs..

        database
            .collection("people")
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

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
