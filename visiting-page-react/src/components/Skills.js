import React from 'react';
import HomePage from './HomePage';
import '../style/style.css';

export default class Skills extends React.Component {
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
                        <button>Contact</button>
                    </div>
                    <div className="box">
                        <h1>Skills</h1>
                        <ul className="hard">
                            <li><span>Languages:</span>
                                <ul> 
                                    <li>HTML5</li> 
                                    <li>CSS3</li> 
                                    <li>JavaScript (ES6)</li>
                                </ul>
                            </li>
                            <li><span>Library:</span> 
                                <ul>
                                    <li>React</li>
                                    <li>npm</li>
                                </ul>
                            </li>
                            <li><span>Tools:</span> 
                                <ul>
                                    <li>Babel</li>
                                    <li>Webpack</li>
                                </ul>
                            </li>
                            <li><span>Version control system and repository:</span> 
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                </ul>
                            </li>
                        </ul>
                        <hr></hr>
                        <ul className="soft">
                            <li>Communication skills and ability to work in a team</li>
                            <li>Good organisational skills</li>
                            <li>Willingness to learn and develop</li>
                        </ul>
                    </div>
                </div>
            )
        else return (<HomePage />)
    }
}