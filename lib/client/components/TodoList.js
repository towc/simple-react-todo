import React from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      app: props.app
    }
  }
  render() {
    return (
      <div className="todo-list">
        {this.state.app.todos.map( (todo,i) => <TodoItem todo={todo} removeTodoFn={this.removeTodo.bind(this, todo)} key={todo.id} app={this.state.app} ref={i === this.state.app.todos.length - 1 ? "last" : ""} /> )}
        <div className="todo-add" onClick={this.addTodo.bind(this)}>+</div>
      </div>
    )
  }
  addTodo() {
    this.state.app.addTodo( 'New Todo', 'description' );

    this.setState({ app: this.state.app });

    window.setTimeout( (function(){
      this.refs.last.focus()
    }).bind(this), 10 );
  }
  removeTodo( todo ) {
    window.setTimeout( (function( todo ){
      console.log( 'todo-delay for:  ' + todo );
      this.state.app.tickTodo( todo )
        
      this.setState({ app: this.state.app });
    }).bind(this, todo), this.state.app.removeDelay );
  }
}
