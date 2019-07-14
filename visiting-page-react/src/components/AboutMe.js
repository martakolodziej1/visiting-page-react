import React from 'react';
import pages from '../res/constants';
import Renderer from './Renderer';
import Navbar from './Navbar';
import '../style/style.css';

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: pages.aboutMe
        };
    }

    setNextPage = (chosenPage) => {
        this.setState({page: chosenPage});
    }

    render() {
        if (this.state.page !== pages.aboutMe)
            return (<Renderer page = {this.state.page}/>)
        return (
            <div className="container">
                < Navbar setNextPage = {this.setNextPage}/>
                <div className="box">
                    <h1>About me</h1>
                    <ul>
                        <li>Full Name: <span>Marta Kolodziej</span></li>
                        <li>Age: <span>25 Years</span></li>
                        <li>Job: <span>Front-end developer</span></li>
                        <li>Telephone: <span>123 456 789</span></li>
                        <li>E-mail: <span>marta.koodziej at gmail</span></li>
                    </ul>
                    <hr></hr>
                    <p> Recently I completed web programming course CodersCamp, which was organised by CodersCrew Association. During the course I learnt basic programming tools and technology. Basing on theoretical knowledge I created website by myself and a few simple applications with my team. I would like to learn and develop my skills. Working as a Junior Front-end Developer or an internship in software company would be for me great possibility to gain necessary experience and knowledge.</p>
                </div>
             </div>
        )
    }
}