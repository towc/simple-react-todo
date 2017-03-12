import React from 'react'
import ReactDOM from 'react-dom'

import TodoApp from './components/TodoApp'

var app = {
  todos: [],
  name: 'Test Todo',

  setName: function( name ){
    app.name = name;
    console.log( 'changed-name: ' + name );
  },
  addTodo: function( todoName, todoDesc ){
    app.todos.push( new app.Todo( todoName, todoDesc ) );
    console.log( 'added-todo: ' + todoName );
  },
  tickTodo: function( todo ){
    console.log( 'removed-todo: ' + todo.name + ', with id: ' + todo.id );
    app.todos.splice( app.todos.indexOf( todo ), 1 );


    console.log( 'this is app', app );
  },
  removeDelay: 1000,
  Todo: function( name, desc ){
    this.name = name;
    this.desc = desc;
    this.id = Date.now() + '-' + ( Math.random() * 10000 |0 );
  }
}
app.Todo.prototype.setName = function( name ){
  this.name = name;
  console.log( 'changed-todo-name: ' + name );
}
app.Todo.prototype.setDesc = function( desc ){
  this.desc = desc;
  console.log( 'changed-todo-desc: ' + desc );
}
for( var prop in app ){
  if( app[ prop ].constructor === Function && [ 'Todo' ].indexOf( prop ) > -1 )
    app[ prop ] = app[ prop ].bind( this );
}

ReactDOM.render(
  <TodoApp app={app} />,
  document.querySelector( '.js--react-root' )
);
