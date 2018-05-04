import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Form from './Form'

export default function Routes(){
    return(
        <Switch>
            <Route path='/' component={Form} exact />
            <Route path='/edit' component='' />
        </Switch>
    )


}