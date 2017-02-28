import React from 'react';

class XS2 extends React.Component {

  render() {
    let style = Object.assign({
      height: '100%'
    }, this.props.style);
    return (
      <div className="col-xs-2" style={style}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

XS2.defaultProps = {};

export default XS2;
