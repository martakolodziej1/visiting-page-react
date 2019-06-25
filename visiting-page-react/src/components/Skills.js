import React from 'react';
import '../style/style.css';

export default class Skills extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="nav">
                    <button>Home</button>
                    <button>About me</button>
                    <button>Skills</button>
                    <button>Portfolio</button>
                    <button>Contact</button>
                </div>
                <div className="box">
                    <h1>Skills</h1>
                    <ul className="hard"><h3>Hard ones</h3>
                        <li>html</li>
                        <li>css</li>
                        <li>java script</li>
                    </ul>
                    <ul className="soft"><h3>Soft ones</h3>
                        <li>creativity</li>
                        <li>analytical thinking</li>
                        <li>patience</li>
                    </ul>
                </div>
            </div>
        )
    }
}