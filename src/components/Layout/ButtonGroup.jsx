import React from 'react';

class ButtonGroup extends React.Component {

  render() {
    let style = Object.assign({
      position: 'relative',
      backgroundColor: 'white',
      zIndex: '0',
      padding: '1%',
      width: '100%',
      top: '0',
      height: 'auto'
    }, this.props.style);
    return (
      <div className="toolbar container-fluid text-right" style={style}>
        <div className="btn-group">
          {this.props.children}
        </div>
      </div>
    );
  }

}

ButtonGroup.defaultProps = {};

export default ButtonGroup;
