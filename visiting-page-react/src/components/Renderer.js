import React from 'react';
import pages from '../res/constants';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';

export default class Renderer extends React.Component {
    render() {
        if (this.props.page === pages.home)
            return (<Home />)
        if (this.props.page === pages.aboutMe)
            return (<AboutMe />)
        if (this.props.page === pages.skills)
            return (<Skills />)
        if (this.props.page === pages.contact)
            return (<Contact />)
//             TODO error page
        return null;
    }
}