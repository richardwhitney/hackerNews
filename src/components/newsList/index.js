import React, {Component, Fragment} from 'react';
import NewsItem from '../newsItem';

export default class NewsList extends Component {
  render() {
    let newsPosts = this.props.posts.map((post, index) => (
      <NewsItem key={post.id} post={post} upvoteHandler={this.props.upvoteHandler}/>
    ));
    return (
      <Fragment>{newsPosts}</Fragment>
    );
  }
}