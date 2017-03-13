import React from 'react'
import ReactDOM from 'react-dom'

import TodoApp from './components/TodoApp'

var app = {
  todos: [],
  name: 'Test Todo',

  setName: function( name ){
    app.name = name;
  },
  addTodo: function( todoName, todoDesc ){
    app.todos.push( new app.Todo( todoName, todoDesc ) );
  },
  tickTodo: function( todo ){
    app.todos.splice( app.todos.indexOf( todo ), 1 );
  },
  removeDelay: 1000,
  Todo: function( name, desc ){
    this.name = name || app.randomTodoNames[ app.randomTodoNames.length * Math.random() | 0 ];
    this.desc = desc || app.randomTodoDescs[ app.randomTodoDescs.length * Math.random() | 0 ];
    this.id = Date.now() + '-' + ( Math.random() * 1000000 |0 );
  },
  toJson: function(){
    var data = {};
    data.name = app.name;
    data.todos = app.todos.map( ( todo ) => ({ name: todo.name, desc: todo.desc }) );
    return JSON.stringify(data);
  },
  fromJson: function( str ){
    var data = JSON.parse( str );
    app.name = data.name;
    app.todos = data.todos.map( (todo) => new app.Todo( todo.name, todo.desc ) );
  },
  randomTodoNames: [
    'Contemplate Ceiling',
    'Say Hi to Stranger',
    'Volunteer in Hospital',
    'Clean Streets',
    'Call Relative',
  ],
  randomTodoDescs: [
    'must do it',
    'born for it',
    'she asked me to',
    'coz me good'
  ]
}
app.Todo.prototype.setName = function( name ){
  this.name = name;
}
app.Todo.prototype.setDesc = function( desc ){
  this.desc = desc;
}
for( var prop in app ){
  if( app[ prop ].constructor === Function && [ 'Todo' ].indexOf( prop ) > -1 )
    app[ prop ] = app[ prop ].bind( this );
}

if( window.location.hash ){
  var data = {}
    , str = window.location.hash.split('');
  str.shift();
  str = str.join('');
  try {
    data = JSON.parse( str );
  } catch( e ){}

  if( data ){
    app.fromJson( str );
  } else {
    app.fromJson( '{"name":"learn JavaScript","todos":[{"name":"conditionals","desc":"if, ==="},{"name":"loops","desc":"for, while"},{"name":"functions","desc":"function(), ()=>{}"},{"name":"abstractProxyFactories","desc":"just messing with you"}]}' );
  }
}


ReactDOM.render(
  <TodoApp app={app} />,
  document.querySelector( '.js--react-root' )
);

window.app = app;
