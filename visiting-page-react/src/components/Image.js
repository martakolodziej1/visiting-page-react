import React from 'react';
import '../style/style.css';

const imageUrl = '/img/stil-xhb7s-Q-ECA-unsplash.jpg'

const imageStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(' + imageUrl + ')',
    backgroundSize: 'cover'
};

export default class Image extends React.Component{
    render() {
        return <img style={ imageStyle } alt=''/>
    }
}
