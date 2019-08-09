import React from 'react';
import Home from './Home';
import '../style/style.css';

export default class ThankYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goToHomePage: false
        };
    }

    jumpToHomePage = () => {
        this.setState({goToHomePage: true});
    }

    render () {
        if (!this.state.goToHomePage)
            return (
                <div className="container">
                    <div className="image-side"></div>
                    <div className="box">
                        <div className="thanks">
                            <h1>Thank you for getting in touch!</h1>
                            <p>I appreciate you contacting me.<br></br>I will answer you as soon as possible.</p>
                            <h2>Have a great day!</h2>
                            <button onClick={this.jumpToHomePage}>Home</button>
                        </div>
                    </div>
                </div>
            )
        else return (<Home />)
    }
}