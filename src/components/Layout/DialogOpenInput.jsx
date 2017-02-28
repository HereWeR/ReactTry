import React from 'react';

import XS6 from './XS6';
import XS8 from './XS8';

class DialogOpenInput extends React.Component {

  render() {
    let {
      labelValue, inputValue
    } = this.props;

    return (
      <div>
        <XS6>
          <div className="eapp-fleld">
            <form className="form-horizontal" name="fieldForm">
              <div className="form-group">
                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                  <span>{labelValue}</span>
                </label>
                <XS8>
                  <div style={{display: 'block'}}>
                    <div style={{border: 'none'}}
                         className="form-control field-input">{inputValue}
                    </div>
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

DialogOpenInput.defaultProps = {};

export default DialogOpenInput;
