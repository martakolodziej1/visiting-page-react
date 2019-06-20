import React from 'react';
import '../style/style.css';

const imgProfile = {
    src: process.env.PUBLIC_URL + '/img/profile.jpg',
    alt: 'profile'
};

export default class HomePage extends React.Component {
    render() {
        return ( 
            <div className="container">
                <img src={imgProfile.src} alt={imgProfile.alt} />
                <hr></hr>
                <h1>Hello!</h1>
                <h2>My name is Marta Kolodziej</h2>
                <h3>I am a front-end developer</h3>
            </div>
        )
    }
}