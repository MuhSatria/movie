import React, { Component } from 'react';
import MovieList from './MovieList';
import Navbars from '../pages/Navbars';


class PageList extends React.Component {
    render(){
        return(
            <div>
                <Navbars/>
                <MovieList/>
            </div>
        )
    }
}

export default PageList;