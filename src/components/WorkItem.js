import React from 'react';

class Resume extends React.Component {
  render() {
    console.log(this.props);
    return <div>{this.props.company}</div>;
  }
}

export default Resume;
