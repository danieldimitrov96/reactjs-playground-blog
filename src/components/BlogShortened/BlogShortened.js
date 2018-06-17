import React from 'react';
import { Redirect, Link } from 'react-router-dom'

import Aux from './../../hoc/Aux/Aux'

const blogShortened = (props) => (
    <article className="Post" onClick={props.clicked}>
        <Link to={'/blog/' + props.id} key={props.id}>
            <h1>Tittle</h1>
       </Link>
        <div>{props.title}</div>
            <h1>Author</h1>
            <div>{props.author}</div>
            {props.show ? (
                <Aux>
                  <h1> Body </h1>
                  <div> {props.body} </div>
                  <button className="btn btn-warning"  onClick={(id) => props.hideMore(props.id - 1)}> Hide body </button>
                 </Aux>
              ) : (
        <button className="btn btn-success"  onClick={(id) => props.showMore(props.id - 1)}> Show body </button>
    )}
    <hr/>
    </article>
);

export default blogShortened;