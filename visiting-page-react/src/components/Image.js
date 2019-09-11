import React from 'react';
import '../style/style.css';

const image = {
    src: process.env.PUBLIC_URL + '/img/stil-xhb7s-Q-ECA-unsplash.jpg',
    alt: 'desk image'
};

export default class Image extends React.Component{
    render() {
        return <img src={image.src} alt={image.alt}/>
    }
}
