import React from 'react'

import Editable from './Editable'

export default class TodoItem extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      todo: props.todo
    }
  }
  render() {
    return (
      <div ref="el" className="todo-item">
        <div className="todo-item-content">
          <Editable ref="name" className="todo-item-name" value={this.state.todo.name} changeFn={this.changeNameFn.bind(this)} />
          <Editable className="todo-item-desc" value={this.state.todo.desc} changeFn={this.changeDescFn.bind(this)} />
        </div>
        <div className="todo-item-control">
          <div ref="tick" className="todo-item-tick" onClick={this.tickFn.bind(this)} />
        </div>
      </div>
    )
  }
  focus() {
    this.refs.name.focus();
  }
  changeNameFn( val ) {
    this.state.todo.setName( val );

    this.setState({ todo: this.state.todo });
  }
  changeDescFn( val ) {
    this.state.todo.setDesc( val );

    this.setState({ todo: this.state.todo });
  }
  tickFn() {
    this.refs.el.classList.add( 'todo-item--ticked' );
    this.refs.tick.classList.add( 'todo-item-tick--ticked' );

    this.props.removeTodoFn();
  }
}
