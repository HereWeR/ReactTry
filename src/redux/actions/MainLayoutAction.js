/**
 * Created by lx on 2017/2/23.
 */
import * as MainLayout from '../../constants/MainLayout';


// ================================
// Action Creator
// ================================
export const handleButtonClick = (e) => ({
  type: MainLayout.HANDLE_BUTTON_CLICK,
  params: e
});

export const handleSelectChange = (val) => ({
  type: MainLayout.HANDLE_SELECT_CHANGE,
  params: val
});

export const handleTextChange = (e) => ({
  type: MainLayout.HANDLE_TEXT_CHANGE,
  params: e
});
// Actions 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。用法是通过 store.dispatch() 把 action 传到 store。
// Action 有两个作用。
// 1.用Action来分辨具体的执行动作。比如是create 还是delete？或者是update？
// 2.操作数据首先得有数据。比如添加数据得有数据，删除数据得有ID。。action就是存这些数据的地方。
// redux约定 Action 内使用一个字符串类型的 type 字段来表示将要执行的动作。
