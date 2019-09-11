import React from 'react';
import pages from '../res/constants';
import Page from './Page';
import Renderer from './Renderer';
import Navbar from './Navbar';
import Image from './Image';
import '../style/style.css';

export default class Skills extends Page {
    constructor(props) {
        super(props);
        this.state = {
            page: pages.skills
        };
    }

    render() {
        if (this.state.page !== pages.skills)
            return (<Renderer page = {this.state.page}/>)
        return (
            <div className="container">
                <Image />
                <div className="box">
                    <Navbar setNextPage = {this.setNextPage}/>
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
    }
}