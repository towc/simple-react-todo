import React from 'react'

export default class Editable extends React.Component {
  render() {
    return (
      <input ref="el" className={"editable-input " + ( this.props.className ? this.props.className : '')} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onChange={this.onChange.bind(this)} value={this.props.value} />
    )
  }
  onFocus() {
    if( this.props.focusFn )
      this.props.focusFn();

    this.refs.el.classList.add( 'editing' );
  }
  onBlur() {
    if( this.props.blurFn )
      this.props.blurFn();

    this.refs.el.classList.remove( 'editing' );
  }
  onKeyDown( e ) {
    if( this.props.keyDownFn )
      this.props.keyDownFn( e );

    if( e.keyCode === 13 ) {
      this.refs.el.blur();
      e.preventDefault();
    }
  }
  onChange() {
    if( this.props.changeFn )
      this.props.changeFn( this.refs.el.value );
  }
  focus() {
    this.refs.el.focus();
  }
}
