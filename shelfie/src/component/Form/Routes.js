import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Form from './Form'
import Delete from '../Product/Delete';

export default function Routes(props){
    return(
        <Switch>
            <Route path='/' component={Form} exact />
            <Route path='/delete' component={Delete(props.match)} />
        </Switch>
    )


}