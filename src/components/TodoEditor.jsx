import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as todosOperations from '../redux/todos/todos.operations';

class TodoEditor extends Component {
  state = {
    text: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
  };

  render() {
    const { text } = this.state;
    const { loading } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            name="text"
            placeholder="Text"
            onChange={this.handleChange}
            value={text}
          />
          <button type="submit" disabled={loading}>
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.todos.loading,
  };
};

const mapDispatchToProps = {
  createTodo: todosOperations.createTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditor);