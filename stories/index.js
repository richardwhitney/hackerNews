import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NewsForm from '../src/components/newsForm';
import NewsItem from '../src/components/newsItem';
import NewsList from '../src/components/newsList';
import { action } from "@storybook/addon-actions";
import CommentForm from "../src/components/commentForm";
import Comment from "../src/components/comment";
import CommentList from "../src/components/commentList";
import Header from "../src/components/header/";
import { MemoryRouter } from "react-router";
import LoginForm from "../src/components/authentication/loginForm";

const post = {
  id: 1,
  title: 'Post 1.',
  link: 'http://www.for.bar',
  author: 'Joe Bloggs',
  comments: [],
  upvotes: 10
};

storiesOf("Hacker App/News Form", module).add("default", () => (
  <NewsForm handleAdd={action("Add new post: ")}/>
));

storiesOf("Hacker App/News Item", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add('default', () => <NewsItem post={post} upvoteHandler={action("upvoted")}/>)
  .add('No hyperlink', () => <NewsItem post={{...post, link:''}} upvoteHandler={action("upvoted")}/>)

storiesOf('Hacker App/News List', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add('default', () => {
    const defaultPosts = [
      { ...post, id: 1, title: 'Post 1', upvotes: 10 },
      { ...post, id: 2, title: 'Post 2', upvotes: 20 },
      { ...post, id: 3, title: 'Post 3', upvotes: 30 },
      { ...post, id: 4, title: 'Post 4', upvotes: 40 }
    ];
    return <NewsList posts={defaultPosts}/>
  });

storiesOf("Hacker App/Comment page/Comment Form", module).add("default", () => (
  <CommentForm post={post} addCommentHandler={action("comment added")}/>
));

const comment = {
  id: 1,
  author: "Joe Bloggs",
  comment: "I agree with...",
  upvotes: 10
};

storiesOf("Hacker App/Comment page/Comment list", module).add("default", () => {
  const defaultComments = [
    comment,
    {...comment, author: "Jane Smith", upvotes: 3, id: 2},
    {...comment, author: "On the other hand", id: 3},
    {...comment, author: "Jil Dwyer", upvotes: 5, id: 4}
  ];
  return (
    <CommentList upvoteHandler={action("upvoted")} comments={defaultComments}/>
  );
});

storiesOf("Hacker App/Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <Header />);

storiesOf("Hacker App/Login Form", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <LoginForm />
  ));
