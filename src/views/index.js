import React, {Component, Fragment} from 'react';
import {Route,Redirect} from 'react-router-dom';

function Index(props) {
    return (
        <Fragment>
            <Route path='/landing' exact component={() => <p>Memes</p>} />
            <Route path='/' exact render={() => <Redirect to='/landing' />} />
        </Fragment>
    );
}

export default Index;