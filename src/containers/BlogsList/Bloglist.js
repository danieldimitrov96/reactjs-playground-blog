import axios from 'axios'
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'

import BlogShortened from '../../components/BlogShortened/BlogShortened';
import { updateObject } from './../../shared/utility';


class BlogsList  extends Component{
    constructor(props) {
        super(props);
          this.state = {
          posts: [],
        }
        this.showMore = this.showMore.bind(this);
        this.hideMore = this.hideMore.bind(this);
    }

    showMore(id){
        const newPosts = this.state.posts;
        newPosts[id].show = true;
        this.setState(updateObject(this.state.posts,{
            posts : newPosts
        }));
    }

    hideMore(id){
        const newPosts = this.state.posts;
        newPosts[id].show = false;
        this.setState(updateObject(this.state.posts,{
            posts : newPosts
        }));
    }
   
    componentWillMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then( response => {
    const posts = response.data.slice( 0, 4 );
    const updatedPosts = posts.map( post => {
        return {
            ...post,
            author: 'Pesho',
            show: false,
        }
    } );
    this.setState( { posts: updatedPosts } );
   } );
}

    render(){
            const posts = this.state.posts.map( post => {
            return (
                <BlogShortened
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    body = {post.body}
                    show={post.show}
                    showMore={this.showMore}
                    hideMore={this.hideMore}/>
            );
        } );

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default BlogsList;