import React from 'react';
import './Animal.css';

function Animal({name, species, age, image, animals}) {
    return (
        <div className="Animal">
            <div className="animals-cards">
                <img className="animal-img" src={image} alt={name} />
                <div className="animal-desc">
                    <h3>{name}</h3>
                    <span>Espèce: {species}</span>
                    <span>Âge : {age}</span>
                    {/* <span>{animals.name}</span> */}
                </div>
            </div>
        </div>
    )
}

export default Animal;
