import React from 'react'

import Editable from './Editable'

export default class TodoHeader extends React.Component {
  render() {
    return (
      <div className="todo-header">
        <Editable className="todo-header-name"
          changeFn={this.props.appChangeNameFn}
          value={this.props.appName} />
      </div>
    )
  }
}
