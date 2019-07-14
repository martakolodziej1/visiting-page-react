import React from 'react';

export default class Page extends React.Component {

    setNextPage = (chosenPage) => {
        this.setState({page: chosenPage});
    }
}