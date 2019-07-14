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
            goTo: ""
        };
    }

     jumpToAboutMe = () => {
         this.setState({goTo: "AboutMe"});
     }

    jumpToSkills = () => {
        this.setState({goTo: "Skills"});
    }

    render() {
        if (this.state.goTo === "Skills")
            return (<Skills />)
        if (this.state.goTo === "AboutMe")
            return (<AboutMe />)
        return (
            <div className="container">
                <div className="nav">
                    <button>Home</button>
                    <button onClick={this.jumpToAboutMe}>About me</button>
                    <button onClick={this.jumpToSkills}>Skills</button>
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
    }
}