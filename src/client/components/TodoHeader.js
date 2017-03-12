import React from 'react'

import Editable from './Editable'

export default class TodoHeader extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      app: props.app
    }
  }
  render() {
    return (
      <div className="todo-header">
        <Editable className="todo-header-name" changeFn={this.changeName.bind(this)} value={this.state.app.name} />
      </div>
    )
  }
  focusName() {
    this.refs.todoHeaderName.classList.add( 'todo-header-name--editing' );
  }
  blurName() {
    this.refs.todoHeaderName.classList.remove( 'todo-header-name--editing' );
  }
  keyDownName( e ) {
    if( e.keyCode === 13 ){
      this.refs.todoHeaderName.blur();
      e.preventDefault();
    }
  }
  changeName( val ) {
    this.state.app.setName( val );

    this.setState( { app: this.state.app } );
  }
}
