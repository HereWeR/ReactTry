/**
 * Created by lx on 2017/2/23.
 */
import {HANDLE_BUTTON_CLICK, HANDLE_SELECT_CHANGE, HANDLE_TEXT_CHANGE} from '../../constants/MainLayout'
// import merge from '../helpers/merge';

//初始化数据
const initialState = {
  // buttonState: false,
  // selectFlag: false,
  // valueSelected: 'N/A',
  // valueTextarea: '',
  content: 'Out of scope',
  styleErrorTextarea: {
    border: '1px solid #a94442'
  },
  styleErrorSelect: {
    border: '1px solid #a94442'
  },
  titleValueVM: {
    One: 'General',
    Two: ''
  },
  buttonValueVM: {
    One: '取消',
    Two: '新增'
  },
  labelValueVM: {
    One: 'Category',
    Two: '子类别',
    Three: '填表人',
    Four: '申请人',
    Five: '部门',
    Six: '申请日期',
    Seven: '活动类型',
    Eight: '申请原因'
  },
  inputValueVM: {
    One: 'Category',
    Two: '子类别',
    Three: '填表人',
    Four: '申请人',
    Five: '部门',
    Six: '申请日期',
    Seven: '活动类型',
    Eight: '申请原因'
  },
  options: [
    {value: '91710101', label: 'Layout', className: ''},
    {value: '91710102', label: 'New Installation', className: ''},
    {value: '91710103', label: 'Others', className: ''},
    {value: '91710104', label: 'Replacement', className: ''}
  ],
  mainLayoutState: {
    buttonState: false,
    selectFlag: false,
    valueSelected: '',
    valueTextarea: ''
  }
};

export default function mainLayoutReducer(state = initialState, action) {

  switch (action.type) {

    case HANDLE_BUTTON_CLICK:
      return function () {
        console.log(state);
      };

    case HANDLE_SELECT_CHANGE:
      if (action.params.value != '') {
        return Object.assign({}, state, {
          valueSelected: action.params.value,
          selectFlag: true,
          styleErrorSelect: {}
        });
      } else {
        return Object.assign({}, state, {
          valueSelected: action.params.value,
          selectFlag: false,
          styleErrorSelect: {border: '1px solid #a94442'}
        });
      }

    case HANDLE_TEXT_CHANGE:
      if (action.params.target.value != '' && action.params.target.value != null && action.params.target.value != 'undefined') {
        return Object.assign({}, state, {
          styleErrorTextarea: {},
          buttonState: true,
          valueTextarea: action.params.target.value
        });
      } else {
        return Object.assign({}, state, {
          styleErrorTextarea: {border: '1px solid #a94442'},
          buttonState: false,
          valueTextarea: action.params.target.value
        });
      }

    default:
      return state
  }
}

// Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。这是 reducer 要做的事情。
// Action就像leader，告诉我们应该做哪些事，并且给我们提供‘资源（就是上面说的数据）’，真正干活的是苦逼的Reducer。。
// Reducer 是一个普通的回调函数。
// 当它被Redux调用的时候会为他传递两个参数State 和 Action。
// Reducer会根据 Action 的type来对旧的 State 进行操作。返回新的State。
// reduce() 遍历数组，在每一项元素后面触发一个回调函数，经过计算返回一个累加的值。
// return [
//   {
//     id: state.reduce((maxId, 这个数组名) => Math.max(这个数组名.id, maxId), -1) + 1,  //每次添加，就增加一个最大的id
//     text: action.text
//   },
//   ...state     //展开state数组的每一项到当前的数组,否则你只能看到一个数据
// ]
// filter()
// 遍历数组，在每一项元素后面触发一个回调函数，通过判断，保留或移除当前项，最后返回一个新数组。
// state是个任务数组，filter()里面只有一个参数，就是个箭头函数，该函数只有一个参数是todo，
// 也就是数组的每一项元素，箭头后面那个判断语句，如果返回true则保留当前项，反之移除当前项。
// case DELETE_TODO:
//   return state.filter(数组名 =>
//     数组名.id !== action.id
//   )

// Reducer很简单，但有三点需要注意

// 不要修改 state。都是从action那里拿过来的
// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
// 如果没有旧的State，就返回一个initialState，这很重要！！！
