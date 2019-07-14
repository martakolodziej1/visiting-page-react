import React from 'react';
import pages from '../res/constants';
import '../style/style.css';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "HomePage"
        };
    }

    jumpToHomePage = () => {
        this.props.setNextPage(pages.home);
     }

     jumpToAboutMe = () => {
        this.props.setNextPage(pages.aboutMe);
     }

    jumpToSkills = () => {
        this.props.setNextPage(pages.skills);
    }

    jumpToContact = () => {
        this.props.setNextPage(pages.contact);
     }

    render() {
        return (
            <div className="nav">
                <button onClick={this.jumpToHomePage}>Home</button>
                <button onClick={this.jumpToAboutMe}>About me</button>
                <button onClick={this.jumpToSkills}>Skills</button>
                <button onClick={this.jumpToContact}>Contact</button>
            </div>
        )
    }
}