import React from 'react';

import XS6 from './XS6';
import XS8 from './XS8';

class NormalTextarea extends React.Component {

  render() {
    let {
      labelValue, inputValue, handleChangeText, errorStyle, requiredOrNot
    } = this.props;

    return (
      <div>
        <XS6>
          <div className="eapp-fleld">
            <form className="form-horizontal" name="fieldForm">
              <div className="form-group">
                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                  <span>*</span>
                  <span>{labelValue}</span>
                  <div className="eapp-input-error">必填项</div>
                </label>
                <XS8>
                  <div style={{display: 'block'}}>
                    <textarea rows="3" className="form-control input-sm col-sm-12 has-error"
                              maxLength="255" name="applyReason" style={errorStyle}
                              onChange={handleChangeText}
                              value={inputValue}
                              required></textarea>
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

NormalTextarea.defaultProps = {};

export default NormalTextarea;
