require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonState: false,
      selectFlag: false,
      valueSelected: '',
      valueTextarea: ''
    }
  }

  render() {
    return (
      <div className="adf" style={{height: '100%', overflow: 'scroll'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2" style={{height: '100%'}}></div>
            <div className="col-xs-8">
              <div>
                <div>
                  <div className="disclaimer"
                       style={{
                         position: 'relative',
                         backgroundColor: 'white',
                         zIndex: '0',
                         padding: '1%',
                         width: '100%',
                         top: '0',
                         height: 'auto'
                       }}>
                    <div className="row">
                      <h2 className="col-xs-6 title">声明:</h2>
                    </div>
                    <div className="row">
                      <div className="alert alert-warning" style={{marginBottom: '2px'}}>
                        <b>Out of Scope</b>
                        <div className="text-right" style={{paddingTop: '10px'}}>
                          <input id="disclaimer" type="checkbox"/>
                          <label style={{marginLeft: '5px'}}>我接收此声明</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="toolbar container-fluid text-right"
                       style={{
                         position: 'relative',
                         backgroundColor: 'white',
                         zIndex: '0',
                         padding: '1%',
                         width: '100%',
                         top: '0',
                         height: 'auto'
                       }}>
                    <div className="btn-group">
                      <button className="btn btn-default eapp-form-button"
                              onClick={()=> {
                                this.handleClick();
                              }}>
                        取消
                      </button>
                      <button className="btn btn-default eapp-form-button"
                              onClick={()=> {
                                this.handleClick();
                              }} disabled={!this.state.valueTextarea || this.state.selectFlag == false}>
                        新增
                      </button>
                    </div>
                  </div>
                </div>
                <div className="eapp-form">
                  <div className="eapp-category panel panel-default">
                    <div className="panel-heading title">
                      <h2>General</h2>
                    </div>
                    <div className="panel-body">
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-fleld">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>Category</span>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                    <div style={{border: 'none !important'}}
                                         className="form-control field-input">REFS Mgt.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-fleld">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>子类别</span>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                    <div style={{border: 'none !important'}}
                                         className="form-control field-input">new request
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-fleld">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>填表人</span>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                    <div style={{border: 'none !important'}}
                                         className="form-control field-input">绑定人名
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-fleld">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>申请人</span>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                    <input type="text" className="form-control field-input"
                                           style={{border: 'none !important'}}
                                           onClick={()=> {
                                             this.handleClick();
                                           }}/>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-fleld">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>部门</span>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                    <div style={{border: 'none !important'}}
                                         className="form-control field-input">绑定部门名
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-fleld">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>申请日期</span>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                    <div style={{border: 'none !important'}}
                                         className="form-control field-input">绑定日期
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-field">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>*</span>
                                  <span>活动类型</span>
                                  <div className="eapp-input-error">必填项</div>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                    <select className="form-control input-sm has-error"
                                            type="choice" value={this.state.valueSelected}
                                            onChange={(e)=> {
                                              this.handleSelect(e);
                                            }} required>
                                      <option value="N/A">-- Select a value --</option>
                                      <option value="91710101">Layout</option>
                                      <option value="91710102">New Installation</option>
                                      <option value="91710104">Others</option>
                                      <option value="91710103">Replacement</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="col-xs-6">
                          <div className="eapp-fleld">
                            <form className="form-horizontal" name="fieldForm">
                              <div className="form-group">
                                <label className="col-xs-4 control-label" style={{display: 'block'}}>
                                  <span>*</span>
                                  <span>申请原因</span>
                                  <div className="eapp-input-error">必填项</div>
                                </label>
                                <div className="col-xs-8">
                                  <div style={{display: 'block'}}>
                                                                <textarea rows="3"
                                                                          className="form-control input-sm col-sm-12 has-error"
                                                                          maxLength="255" name="applyReason"
                                                                          onChange={(e)=> {
                                                                            this.handleChange(e);
                                                                          }}
                                                                          value={this.state.valueTextarea}
                                                                          required></textarea>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-2"></div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }

  handleClick() {
    console.log(this.state);
    // const inputNode = findDOMNode(this.refs.input);
    // const text = inputNode.value.trim();
    // this.props.onAddClick(text);
    // inputNode.value = '';
  }

  handleSelect(e) {
    if (e.target.value != '') {
      this.setState({valueSelected: e.target.value});
      if (e.target.value == 'N/A') {
        this.setState({selectFlag: false});
      } else {
        this.setState({selectFlag: true});
      }
    }
  }

  handleChange(e) {
    //更改button disabled
    if (e.target.value != '' && e.target.value != null && e.target.value != 'undefined') {
      //能提交disabled
      this.setState({buttonState: true});
      this.setState({valueTextarea: e.target.value});
    } else {
      this.setState({buttonState: false});
      this.setState({valueTextarea: e.target.value});
    }
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
