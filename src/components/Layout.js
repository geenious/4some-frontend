import React from 'react';
import '../styles/reset.css';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
