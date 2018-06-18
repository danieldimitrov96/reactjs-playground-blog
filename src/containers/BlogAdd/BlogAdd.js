import React from 'react';
import { Component } from 'react';

import Button from '../../components/UI/button'
class BlogAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author: '',
            title: ''
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
      }
    
      handleTitleChange(event){
        this.setState({title: event.target.value})
      }

      handleBodyChange(event) {
        this.setState({body: event.target.value});
      }

      handleAuthorChange(event) {
        this.setState({author: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(event);
      }

   render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div> 
                 <label>
                   Title:
                   <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                 </label>
                </div>
                <div> 
                <label>
                   Author:
                   <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
                 </label>
                </div>
                <div> 
                 <label>
                   Body:
                   <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
                 </label>
                </div>
                <Button>SUBMIT</Button>
            </form>
        )
    }
}
export default BlogAdd;