import React from 'react';

import queryString from 'query-string';

const blogFull = ( props ) => {

    console.log(props.match.params.id);
    console.log(props);
    console.log(queryString.parse(props.location.search));
    return <h1>blogFull</h1>
}

export default blogFull;