import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as todosOperations from '../redux/todos/todos.operations';

class TodoList extends Component {
  onDeleteTodo = (event) => {
    console.log(event.target);
  }

  render() {
    const { todos, loading } = this.props;

    return (
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.text}</p>
            <button type="button" onClick={this.onDeleteTodo} disabled={loading}>Delete</button>
          </div>
        ))}
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
  deleteTodo: todosOperations.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);