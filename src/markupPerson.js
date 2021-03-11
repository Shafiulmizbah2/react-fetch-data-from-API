import React from 'react'

export function Person(props) {
    return (
       
        <div className="person">
            <div className="profile">
                <img src={props.image} alt={props.name} className="profile-img"></img>
            </div>
            <div className="content">
                <h3 className="heading-tertiary">{props.name}</h3>
                <a href={props.link} className="btn">Profile</a>
                {/* {props.children} */}
            </div> 
            
        </div>   
              
    )
}

