import React from 'react';
import HomePage from './HomePage';
import '../style/style.css';

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goToHomePage: false
        };
    }

    jumpToHomePage = () => {
        this.setState({goToHomePage: true});
    }

    render() {
        if (!this.state.goToHomePage)
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
                        <h1>About me</h1>
                        <ul>
                            <li>Full Name: <span>Marta Kolodziej</span></li>
                            <li>Age: <span>25 Years</span></li>
                            <li>Job: <span>Front-end developer</span></li>
                            <li>Telephone: <span>123 456 789</span></li>
                            <li>E-mail: <span>marta.koodziej@gmail.com</span></li>
                        </ul>
                        <hr></hr>
                        <p>I am a creative and ambitious individual with a great passion for designing websites. I am currently on a web programming course CodersCamp in which I can acquire knowledge, use it in practice and develop my skills. I have excellent communication skills, enabling me to interact with a wide range of clients and work in a multi-person team. My purpose is to create aesthetic and intuitive internet applications, the use of which will bring joy many people.</p>
                    </div>
                </div>
            )
        else return (<HomePage />)
    }
}