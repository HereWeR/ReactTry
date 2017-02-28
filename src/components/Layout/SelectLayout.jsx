import React from 'react';

import XS6 from './XS6';
import XS8 from './XS8';

class SelectLayout extends React.Component {

  render() {
    let {
      labelValue
    } = this.props;

    return (
      <div>
        <XS6>
          <div className="eapp-field">
            <form className="form-horizontal" name="fieldForm">
              <div className="form-group">
                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                  <span>*</span>
                  <span>{labelValue}</span>
                  <div className="eapp-input-error">必填项</div>
                </label>
                <XS8>
                  <div style={{display: 'block'}}>
                    {this.props.children}
                  </div>
                </XS8>
              </div>
            </form>
          </div>
        </XS6>
      </div>
    );
  }

}

SelectLayout.defaultProps = {};

export default SelectLayout;
