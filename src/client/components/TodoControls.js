import React from 'react'

import Editable from './Editable'

export default class TodoControls extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      controlString: props.app.toJson()
    }
  }
  render() {
    return (
      <div className="todo-controls">
        <div className="todo-controls-top" onClick={this.focus.bind(this)}>
          <Editable ref="string" className="todo-control-string" value={this.state.controlString} changeFn={this.changeFn.bind(this)} />
        </div>
        <div className="todo-controls-bottom">
          <div className="todo-control-load" onClick={this.load.bind(this)}>Load</div>
          <div className="todo-control-save" onClick={this.save.bind(this)}>Save</div>
        </div>
      </div>
    )
  }
  changeFn( val ) {
    this.setState({ controlString: val });
  }
  load() {
    this.props.app.fromJson( this.state.controlString );
    window.setTimeout( (function(){this.props.reloadStateFn()}).bind(this), 10 );
  }
  save() {
    this.setState({ controlString: this.props.app.toJson() });
    this.refs.string.focus();
  }
  focus() {
    this.refs.string.focus();
  }
}
