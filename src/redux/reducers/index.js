/**
 * Created by lx on 2017/2/23.
 */
/**************************************************************************
 * Root reducer                                                           *
 *                                                                        *
 * We will pass to our store just one reducer to handle all the state     *
 * by combining all the reducers                                          *
 *                                                                        *
 * routerStateReducer will provide to the store the routers state so that *
 * we are able to extract it from the store                               *
 **************************************************************************/

import {combineReducers} from 'redux'
import {routerStateReducer} from 'redux-router'

// 真正开发项目的时候State会涉及很多功能，在一个Reducer处理所有逻辑会非常混乱
// 所以需要拆分成多个小Reducer，每个Reducer只处理它管理的那部分State数据。然后在由一个主rootReducers来专门管理这些小Reducer。
// Redux提供了一个方法 combineReducers 专门来管理这些小Reducer。

// Import reducers
import mainLayoutReducer from './MainLayoutReducer';
import Increase from './increaseReducer';
import Theme from './themeReducer';

const rootReducer = combineReducers({
  mainLayoutReducer,
  Increase,
  Theme,
  router: routerStateReducer
});

export default rootReducer


// ================================
// 同步的 Reducers（即应用初始化所必需的）
// ================================
// const syncReducers = {
//   router: routerReducer,
//   userData: userReducer
// };

// var initState = {
//   counter: 0,
//   todos: []
// }

// function reducer(state, action) {
//   // ※ 应用的初始状态是在第一次执行 reducer 时设置的 ※
//   if (!state) state = initState
//
//   switch (action.type) {
//     case 'ADD_TODO':
//       var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
//       nextState.todos.push(action.payload)
//       return nextState
//
//     default:
//       // 由于 nextState 会把原 state 整个替换掉
//       // 若无修改，必须返回原 state（否则就是 undefined）
//       return state
//   }
// }

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
// const asyncReducers = {}

/**
 * @return {Function} rootReducer
 */
// export function createRootReducer() {
//   return combineReducers({
//     ...syncReducers,
//     ...asyncReducers
//   })
// }

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
// export function injectReducer(key, reducer) {
//   asyncReducers[key] = reducer
//   store.replaceReducer(createRootReducer()) // 替换当前的 rootReducer
// }
