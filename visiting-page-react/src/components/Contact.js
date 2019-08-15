import React from 'react';
import pages from '../res/constants';
import Page from './Page';
import Renderer from './Renderer';
import Navbar from './Navbar';
import '../style/style.css';

export default class Contact extends Page {
    constructor(props) {
        super(props);
        this.state = {
            page: pages.contact
        };
    }

    render() {
        if (this.state.page !== pages.contact)
            return (<Renderer page = {this.state.page}/>)
        return (
            <div className="container">
                <div className="image-side"></div>
                <div className="box">
                    <Navbar setNextPage = {this.setNextPage}/>
                    <h1>Contact me</h1>
                    <ul>
                        <li>Poland, Wroclaw</li>
                        <li>Długa 3, 12-123</li>
                        <li>123 456 789</li>
                        <li>marta.koodziej at gmail</li>
                    </ul>
                    <hr></hr>
                    <div className="thanks">
                        <h1> Thank you for getting in touch! </h1> 
                        <p> I appreciate you contacting me. <br></br>I will answer you as soon as possible.</p>
                        <h2> Have a great day! </h2>
                    </div>
                </div>
            </div>
        )
    }
}