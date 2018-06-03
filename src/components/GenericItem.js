import React from 'react';

class GenericItem extends React.Component {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        {children}
      </div>
    );
  }
}

export default GenericItem;
