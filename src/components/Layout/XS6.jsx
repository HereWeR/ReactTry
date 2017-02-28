import React from 'react';

class XS6 extends React.Component {

  render() {
    let style = Object.assign({
      height: '100%'
    }, this.props.style);
    return (
      <div className="col-xs-6" style={style}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

XS6.defaultProps = {};

export default XS6;
