import React, { Component } from 'react';
import Navbars from './Navbars';
import NowPlay from '../nowplayingpage/NowPlay';
import '../assets/MainStyle.scss';

class Homepages extends Component {
    render() {
        return (
            <div>
                <Navbars/>
                <NowPlay/>
            </div>
        );
    }
}

export default Homepages;
