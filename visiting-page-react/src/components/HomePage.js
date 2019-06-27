import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import '../style/style.css';

const imgProfile = {
    src: process.env.PUBLIC_URL + '/img/profile.jpg',
    alt: 'profile'
};

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goToAboutMe: false,
            goToSkills: false
        };
    }

    // jumpToAboutMe = () => {
    //     this.setState({goToAboutMe: true});
    // }

    jumpToSkills = () => {
        this.setState({goToSkills: true});
    }

    render() {
        if (!this.state.goToSkills)
            return (
                <div className="container">
                    <div className="nav">
                        <button>Home</button>
                        <button onClick={this.jumpToAboutMe}>About me</button>
                        <button onClick={this.jumpToSkills}>Skills</button>
                        <button>Portfolio</button>
                        <button>Contact</button>
                    </div>
                    <div className="box">
                        <img src={imgProfile.src} alt={imgProfile.alt} />
                        <hr></hr>
                        <h1>Hello!</h1>
                        <h2>My name is Marta Kolodziej</h2>
                        <h3>I am a front-end developer</h3>
                    </div>
                </div>
            )
        else return (<Skills />)
    }
}