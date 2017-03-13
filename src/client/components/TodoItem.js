import React from 'react'

import Editable from './Editable'

export default class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item"
        ref={(el) => {this.mainEl = el}}>
        <div className="todo-item-content">
          <Editable className="todo-item-name" 
            ref={(el) => {this.nameEl = el}}
            value={this.props.todoName}
            changeFn={this.props.todoChangeNameFn} />
          <Editable className="todo-item-desc"
            value={this.props.todoDesc}
            changeFn={this.props.todoChangeDescFn} />
        </div>
        <div className="todo-item-control">
          <div className="todo-item-tick"
            ref={(el) => {this.tickEl = el}}
            onClick={this.tickFn.bind(this)} />
        </div>
      </div>
    )
  }
  focus() {
    this.nameEl.focus();
  }
  changeNameFn( val ) {
    this.props.todo.setName( val );
  }
  changeDescFn( val ) {
    this.props.todo.setDesc( val );
  }
  tickFn() {
    this.mainEl.classList.add( 'todo-item--ticked' );
    this.tickEl.classList.add( 'todo-item-tick--ticked' );

    this.props.removeTodoFn();
  }
}
