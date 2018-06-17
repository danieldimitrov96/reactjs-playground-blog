import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';



import logo from './logo.svg';
import './App.css';

import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'
import BlogsList from './containers/BlogsList/Bloglist'
import BlogAdd from './containers/BlogAdd/BlogAdd'
import BlogFull from './containers/BlogFull/BlogFull';


class App extends Component {

  // componentDidMount(){
  // // get 
  // axios.get('https://blog-post-ac939.firebaseio.com/test.json')
  // .then( data => console.log(data))
  // .catch(er => console.log(er)
  // );


  // //update and create
  // axios({
  //   method: 'patch',
  //   url: 'https://blog-post-ac939.firebaseio.com/newagain.json',
  //   data: {
  //     name: 'joro',
  //     age : 13
  //   }
  // });
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={BlogsList} />
        <Route path="/add" exact component={BlogAdd} />
        <Route path={`/blog/:id`}  component={BlogFull} />
        <Route path={`/blog/:id?joro`}  component={BlogFull} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <div className='container'>
      {routes}
      <Layout/>
      </div>
    );
  }
}

export default App;
