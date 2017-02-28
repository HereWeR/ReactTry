import React from 'react';

class XS8 extends React.Component {

  render() {
    let style = Object.assign({
      height: '100%'
    }, this.props.style);
    return (
      <div className="col-xs-8" style={style}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

XS8.defaultProps = {};

export default XS8;
