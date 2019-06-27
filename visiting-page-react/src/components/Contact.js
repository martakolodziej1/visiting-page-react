import React from 'react';
import '../style/style.css';

export default class Contact extends React.Component {
    render () {
        return (
            <div className="container">
                    <div className="nav">
                        <button onClick={this.jumpToHomePage}>Home</button>
                        <button>About me</button>
                        <button>Skills</button>
                        <button>Portfolio</button>
                        <button>Contact</button>
                    </div>
                    <div className="box">
                        <h1>Contact me</h1>
                        <ul>
                            <li>Poland, Wroclaw</li>
                            <li>Długa 3, 12-123</li>
                            <li>123 456 789</li>
                            <li>marta.koodziej@gmail.com</li>
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