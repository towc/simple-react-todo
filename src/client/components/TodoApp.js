import React from 'react'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoControls from './TodoControls'

export default class TodoApp extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      app: props.app
    }
  }
  render() {
    return (
      <div className="todo-app">
        <TodoHeader app={this.state.app} />
        <TodoList app={this.state.app} />
        <TodoControls app={this.props.app} reloadStateFn={this.reloadState.bind(this)} />
      </div>
    )
  }
  reloadState() {
    this.setState({ app: this.state.app });
  }
}
