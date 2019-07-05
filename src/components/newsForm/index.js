import React, { Component } from 'react';
import './newsForm.css';

export default class Form extends Component {
  state = { title: '', author: '', link: ''};
  render() {
    return (
      <form className="form bg-dark text-light">
        <h3>Add a news item</h3>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Title"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Author"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Link"/>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
}