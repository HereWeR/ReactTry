import React from 'react';

class PanelBoxLayout extends React.Component {

  render() {
    let {
      titleValue
    } = this.props;

    return (
      <div className="eapp-form">
        <div className="eapp-category panel panel-default">
          <div className="panel-heading title">
            <h2>{titleValue}</h2>
          </div>
          <div className="panel-body">
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

PanelBoxLayout.defaultProps = {};

export default PanelBoxLayout;
