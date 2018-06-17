import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = ( props ) => (
    <nav className="navbar navbar-expand-md bg-light fixed-top ">
    <NavLink className="navbar-brand " to='/' exact>Danny Blog</NavLink>   
    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className='navbar-nav'>
            <NavigationItem link="/" exact>Blogs</NavigationItem>
            <NavigationItem link="/add" exact>Add</NavigationItem>
        </ul>
    </div>
    </nav>
);

export default navigationItems;