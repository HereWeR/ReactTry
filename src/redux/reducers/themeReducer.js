//处理主题的reducer
import * as types from '../../constants/types'
const writeColor = '#ffffff';
const grayColor = '#cccccc';
let reducer = (state = {color: writeColor}, action) => {

  switch (action.type) {
    case types.THEME:
      if (state.color == writeColor) {
        return {color: grayColor}
      } else {
        return {color: writeColor}
      }
    default:
      return state
  }
};
export default reducer
