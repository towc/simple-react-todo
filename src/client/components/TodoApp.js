import React from 'react'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <TodoHeader app={this.props.app} />
        <TodoList app={this.props.app} />
      </div>
    )
  }
}
