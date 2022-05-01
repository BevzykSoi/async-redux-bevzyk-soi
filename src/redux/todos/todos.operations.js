import axios from 'axios';

import * as todosActions from './todos.actions';

axios.defaults.baseURL = 'http://localhost:5000';

export const createTodo = (todoData) => (dispatch) => {
  dispatch(todosActions.createTodoRequest());

  axios({
    method: 'POST',
    url: '/todos',
    data: todoData,
  })
    .then((res) => {
      dispatch(todosActions.createTodoSuccess(res.data));
    })
    .catch((error) => {
      dispatch(todosActions.createTodoError(error.message));
    });
};

export const deleteTodo = (todoId) => (dispatch) => {
  dispatch(todosActions.deleteTodoRequest());

  axios({
    method: "DELETE",
    url: `/todos/${todoId}`,
  })
    .then((res) => {
      dispatch(todosActions.deleteTodoSuccess(res.data));
    })
    .catch((error) => {
      dispatch(todosActions.deleteTodoError(error.message));
    });
}

export const fetchTodos = () => (dispatch) => {
  dispatch(todosActions.fetchTodosRequest());

  axios({
    method: 'GET',
    url: '/todos',
  })
    .then((res) => {
      dispatch(todosActions.fetchTodosSuccess(res.data));
    })
    .catch((error) => {
      dispatch(todosActions.fetchTodosError(error.message));
    });
};