//处理数字增加的reducer
import * as types from '../../constants/types'
let reducer = (state = {count: 0}, action)=> {
  let count = state.count;
  switch (action.type) {
    case types.INCREASE:
      //这里使用的action.num，是从action里来的
      return {count: count + action.num};
    default:
      return state
  }
};
export default reducer
