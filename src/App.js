import React, { Component } from 'react';
import './App.css';
import NewsList from './components/newsList';
import Form from './components/newsForm';
import api from './dataStore/stubAPI';
import _ from 'lodash';

export default class App extends Component {
  incrementUpvote = (id) => {
    api.upvote(id);
    this.setState({});
  };

  render() {
    let posts = _.sortBy(api.getAll(), post => -post.upvotes);
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1><a href="/">Hacker News</a></h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Form/>
            </div>
            <div className="col-md-8">
              <NewsList posts={posts} upvoteHandler={this.incrementUpvote}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
