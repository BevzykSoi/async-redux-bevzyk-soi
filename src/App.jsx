import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import * as todosOperations from './redux/todos/todos.operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        <TodoEditor />
        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items,
  };
};

const mapDispatchToProps = {
  fetchTodos: todosOperations.fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);