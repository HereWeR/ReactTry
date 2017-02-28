import React from 'react';

class Disclaimer extends React.Component {

  render() {
    let {
      content
    } = this.props;
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
      <div className="disclaimer" style={style}>
        <div className="row">
          <h2 className="col-xs-6 title">声明:</h2>
        </div>
        <div className="row">
          <div className="alert alert-warning" style={{marginBottom: '2px'}}>
            <b>{content}</b>
            <div className="text-right" style={{paddingTop: '10px'}}>
              <input id="disclaimer" type="checkbox"/>
              <label style={{marginLeft: '5px'}}>我接收此声明</label>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

Disclaimer.defaultProps = {};

export default Disclaimer;
//可用于限制传入的参数类型
// Disclaimer.propTypes = {
//   onClick: React.PropTypes.func.isRequired,
//   content: React.PropTypes.string.isRequired,
//   completed: React.PropTypes.bool.isRequired
// };
