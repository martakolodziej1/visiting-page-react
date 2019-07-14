import React from 'react';
import pages from '../res/constants';
import Renderer from './Renderer';
import Navbar from './Navbar';
import '../style/style.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: pages.contact
        };
    }

    setNextPage = (chosenPage) => {
        this.setState({page: chosenPage});
    }

    render() {
        if (this.state.page !== pages.contact)
            return (<Renderer page = {this.state.page}/>)
        return (
            <div className="container">
                < Navbar setNextPage = {this.setNextPage}/>
                <div className="box">
                    <h1>Contact me</h1>
                    <ul>
                        <li>Poland, Wroclaw</li>
                        <li>Długa 3, 12-123</li>
                        <li>123 456 789</li>
                        <li>marta.koodziej at gmail</li>
                    </ul>
                    <hr></hr>
                    <form action="/action_page.php">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Your name..."/>
                        <label for="email">E-mail</label>
                        <input type="text" id="email" placeholder="Your e-mail address..."/>
                        <label for="subject">What is it about</label>
                        <textarea id="subject" placeholder="Write subject..."></textarea>
                        <label for="message">Message</label>
                        <textarea id="message" placeholder="Write message..."></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}