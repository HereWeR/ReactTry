import React from 'react';

import XS6 from './XS6';
import XS8 from './XS8';

class NormalSelect extends React.Component {

  render() {
    let {
      labelValue, options, requiredOrNot
    } = this.props;


    var temp = [];
    for (var index in this.props.options) {
      temp.push(<option value={this.props.options[index]}> {this.props.options[index]} </option>)
    }

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
                    <select className="form-control input-sm has-error"
                            type="choice" value={temp.value}
                            onChange={(e)=> {
                              this.handleSelect(e);
                            }} required>
                      {temp}
                    </select>
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

NormalSelect.defaultProps = {};

export default NormalSelect;
