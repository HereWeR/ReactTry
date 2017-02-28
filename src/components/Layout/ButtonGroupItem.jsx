import React from 'react';

class ButtonGroupItem extends React.Component {

  render() {
    let {
      handleClick, buttonValue, buttonState
    } = this.props;

    return (
      <button className="btn btn-default eapp-form-button"
              onClick={handleClick} disabled={buttonState}>
        {buttonValue}
      </button>
    );
  }

}

ButtonGroupItem.defaultProps = {};

export default ButtonGroupItem;
