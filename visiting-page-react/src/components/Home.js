import React from 'react';
import pages from '../res/constants';
import Page from './Page';
import Renderer from './Renderer';
import Navbar from './Navbar';
import '../style/style.css';

const imgProfile = {
    src: process.env.PUBLIC_URL + '/img/profile.jpg',
    alt: 'profile'
};

export default class Home extends Page {
    constructor(props) {
        super(props);
        this.state = {
            page: pages.home
        };
    }

    render() {
        if (this.state.page !== pages.home)
            return (<Renderer page = {this.state.page}/>)
        return (
            <div className="container">
                < Navbar setNextPage = {this.setNextPage}/>
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