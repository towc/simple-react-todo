import React from 'react'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoControls from './TodoControls'

export default class TodoApp extends React.Component {
  constructor( props ){
    super( props );

    this.app = props.app;

    this.state = {
      appName: this.app.name,
      appTodos: this.app.todos
    }
  }
  render() {
    return (
      <div className="todo-app">
        <TodoHeader
          ref={( el ) => {this.todoHeader = el}}
          appChangeNameFn={this.appChangeName.bind(this)}
          appName={this.state.appName} />
        <TodoList
          ref={( el ) => {this.todoList = el}}
          appAddTodoFn={this.appAddTodo.bind(this)}
          getAppRemoveTodoFn={this.getAppRemoveTodo.bind(this)}
          getTodoChangeNameFn={this.getTodoChangeName.bind(this)}
          getTodoChangeDescFn={this.getTodoChangeDesc.bind(this)}
          appTodos={this.state.appTodos} />
        <TodoControls app={this.props.app} />
      </div>
    )
  }
  appChangeName( name ) {
    this.app.setName( name );
    this.setState({ appName: this.app.name });
  } 
  appAddTodo() {
    this.app.addTodo();

    this.setState({ appTodos: this.app.todos });

    window.setTimeout( () => {this.todoList.focus()}, 4 );
  }
  appRemoveTodo( todo ) {
    window.setTimeout( () => {this.app.tickTodo( todo )}, this.app.removeDelay );
  }
  getAppRemoveTodo( todo ) {
    return this.appRemoveTodo.bind( this, todo )
  }

  todoChangeName( todo, name ) {
    todo.setName( name );   

    this.setState({ appTodos: this.app.todos }); 
  }
  getTodoChangeName( todo ){
    return (function( name ){
      this.todoChangeName( todo, name );
    }).bind( this );
  }
  todoChangeDesc( todo, desc ) {
    todo.setDesc( desc );   

    this.setState({ appTodos: this.app.todos }); 
  }
  getTodoChangeDesc( todo ){
    return (function( desc ){
      this.todoChangeDesc( todo, desc );
    }).bind( this );
  }

}
