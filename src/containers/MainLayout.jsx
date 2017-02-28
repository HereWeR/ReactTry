'use strict';
require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';

//页面需要的Component
import XS2 from '../components/Layout/XS2';
import XS8 from '../components/Layout/XS8';
import Disclaimer from '../components/Layout/Disclaimer';
import ButtonGroup from '../components/Layout/ButtonGroup';
import ButtonGroupItem from '../components/Layout/ButtonGroupItem';
import PanelBoxLayout from '../components/Layout/PanelBoxLayout';
import DisabledInput from '../components/Layout/DisabledInput';
import DialogOpenInput from '../components/Layout/DialogOpenInput';
import NormalInput from '../components/Layout/NormalInput';
import SelectLayout from '../components/Layout/SelectLayout';
// Select控件需要引入的文件
var Select = require('react-select');
import 'react-select/dist/react-select.css';
import NormalTextarea from '../components/Layout/NormalTextarea';

class MainLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // {}中的所有数据都是从index.js里面的store注入进来的
    let {
      state
    } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <XS2/>
          <XS8>
            <div>
              <Disclaimer content={state.mainLayoutReducer.content}/>
              <ButtonGroup>
                <ButtonGroupItem buttonValue={state.mainLayoutReducer.buttonValueVM.One} handleClick={(e)=> {
                  this.handleButtonClick(e)
                }}>
                </ButtonGroupItem>
                <ButtonGroupItem buttonValue={state.mainLayoutReducer.buttonValueVM.Two}
                                 buttonState={!state.mainLayoutReducer.valueTextarea || state.mainLayoutReducer.selectFlag == false}
                                 handleClick={(e)=> {
                                   this.handleButtonClick(e)
                                 }}>
                </ButtonGroupItem>
              </ButtonGroup>
            </div>
            <PanelBoxLayout titleValue={state.mainLayoutReducer.titleValueVM.One}>
              <DisabledInput labelValue={state.mainLayoutReducer.labelValueVM.One}
                             inputValue={state.mainLayoutReducer.inputValueVM.One}>
              </DisabledInput>
              <DisabledInput labelValue={state.mainLayoutReducer.labelValueVM.Two}
                             inputValue={state.mainLayoutReducer.inputValueVM.Two}>
              </DisabledInput>
              <DisabledInput labelValue={state.mainLayoutReducer.labelValueVM.Three}
                             inputValue={state.mainLayoutReducer.inputValueVM.Three}>
              </DisabledInput>
              <DialogOpenInput labelValue={state.mainLayoutReducer.labelValueVM.Four}
                               inputValue={state.mainLayoutReducer.inputValueVM.Four}>
              </DialogOpenInput>
              <DisabledInput labelValue={state.mainLayoutReducer.labelValueVM.Five}
                             inputValue={state.mainLayoutReducer.inputValueVM.Five}>
              </DisabledInput>
              <NormalInput labelValue={state.mainLayoutReducer.labelValueVM.Six}
                           inputValue={state.mainLayoutReducer.inputValueVM.Six}>
              </NormalInput>
              <SelectLayout labelValue={state.mainLayoutReducer.labelValueVM.Seven}>
                <Select
                  name="form-field-name"
                  style={state.mainLayoutReducer.styleErrorSelect}
                  value={state.mainLayoutReducer.valueSelected}
                  options={state.mainLayoutReducer.options}
                  clearable={false}
                  onChange={this.handleSelectChange.bind(this)}
                  placeholder="-- Select a value --"
                  require
                />
              </SelectLayout>
              <NormalTextarea labelValue={state.mainLayoutReducer.labelValueVM.Eight}
                              errorStyle={state.mainLayoutReducer.styleErrorTextarea}
                              inputValue={state.mainLayoutReducer.valueTextarea}
                              requiredOrNot={true}
                              handleChangeText={(e)=> {
                                this.handleTextChange(e)
                              }}>
              </NormalTextarea>
            </PanelBoxLayout>
          </XS8>
          <XS2/>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }

  handleButtonClick(e) {
    let {handleButtonClick}=this.props.MainAction;
    handleButtonClick(e);
  }

  handleSelectChange(val) {
    let {handleSelectChange}=this.props.MainAction;
    handleSelectChange(val);
  }

  handleTextChange(val) {
    let {handleTextChange}=this.props.MainAction;
    handleTextChange(val);
  }
}

//{React.Children.map(this.props.children, (c, i) => {})}
export default MainLayout
