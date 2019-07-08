import React, { Component } from 'react';
import './App.css';
import NewsList from './components/newsList';
import Form from './components/newsForm';
import api from './dataStore/stubAPI';
import _ from 'lodash';

export default class App extends Component {
  addNewsItem = (title, author, link) => {
    api.add(title, author, link);
    this.setState({});
  };
  incrementUpvote = (id) => {
    api.upvote(id);
    this.setState({});
  };

  render() {
    let posts = _.sortBy(api.getAll(), post => -post.upvotes);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 ">
            <Form handleAdd={this.addNewsItem} />
          </div>
          <div className="col-md-8">
            <NewsList posts={posts} upvoteHandler={this.incrementUpvote} />
          </div>
        </div>
      </div>
    );
  }
}
