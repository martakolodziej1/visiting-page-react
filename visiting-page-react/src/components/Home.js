import React from 'react';
import pages from '../res/constants';
import Page from './Page';
import Renderer from './Renderer';
import Navbar from './Navbar';
import '../style/style.css';

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
                <div className="image-side"></div>
                <div className="box">
                    <Navbar setNextPage = {this.setNextPage}/>  
                    <h1>Hello!</h1>
                    <h2>My name is Marta Kolodziej</h2>
                    <h3>I am a front-end developer</h3>
                </div>
            </div>
        )
    }
}