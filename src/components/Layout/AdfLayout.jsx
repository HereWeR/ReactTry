import React from 'react';

class AdfLayout extends React.Component {

  render() {
    let style = Object.assign({
      height: '100%'
    }, this.props.style);
    return (
      <div className="adf" style={style}>
        {this.props.children}
      </div>
    );
  }

}

AdfLayout.defaultProps = {};

export default AdfLayout;
