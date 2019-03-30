import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepages from './components/pages/Homepages';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageList from './components/listpage/PageList';
import DetailPage from './components/listpage/DetailPage';


class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Homepages} />
                    <Route path='/listfilem' component={PageList} />
                    <Route path='/detailpage/:movie_id' component={DetailPage} />
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;