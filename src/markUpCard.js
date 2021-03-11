import React from 'react';

export default function markUpCard(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="card-content">
            <h3 className="heading-tertiary">{props.name}</h3>
                <a href={props.link} className="btn">Profile</a>
            </div>
        </div>
    )
}
