import React from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.appTodos.map( (todo,i) =>
          <TodoItem
            todoName={todo.name}
            todoDesc={todo.desc}
            removeTodoFn={this.props.getAppRemoveTodoFn( todo )}
            todoChangeNameFn={this.props.getTodoChangeNameFn( todo )}
            todoChangeDescFn={this.props.getTodoChangeDescFn( todo )}
            key={todo.id}
            ref={(el) => { if( i === this.props.appTodos.length - 1 ) this.last = el}} /> )}
        <div className="todo-add" onClick={this.props.appAddTodoFn}>+</div>
      </div>
    )
  }
  focus() {
    this.last.focus();
  }
}
