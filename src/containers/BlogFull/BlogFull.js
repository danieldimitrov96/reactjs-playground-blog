import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import Aux from './../../hoc/Aux/Aux'

const blogFull = ( props ) => {
    return (
        <Aux>
        <h1>blogFull (Take query params + params)</h1>
        <div> id {'   '+ props.match.params.id} </div>
        <div> Tittle(bad practice) {'   '+ queryString.parse(props.location.search).title} </div>
        </Aux>
    )
}

export default blogFull;