/*入口启动文件*/
'use strict';
import 'core-js/fn/object/assign';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Router from 'react-router';
const {Route, Redirect} = Router;
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import {ReduxRouter} from 'redux-router';

import AdfLayout from './components/Layout/AdfLayout';
import MainLayout from './containers/MainLayout';
import Add from './containers/Add';

import * as MainLayoutAction from './redux/actions/MainLayoutAction';
import * as Creator from './redux/actions/creator';

import store from './redux/store/configureStore';

store.subscribe(() => { //监听state变化
  console.log('getState');
  console.log(store.getState());
});

let mapStateToProps = (state) => {
  console.log('绑定数据');
  return {state};
};

// mapDispatchToProps里面用到了bindActionCreators
// 关于bindActionCreators的作用看http://www.cnblogs.com/ZSG-DoBestMe/p/5280198.html
// 就是通过mapDispatchToProps这个方法,把actionCreator变成方法赋值到props,每当调用这个方法，就会更新State
// 之前说过,store有一个store.dispatch方法,就是用这个来将数据返回给界面
// 如果我有很多个Action,总不能手动一个一个加.Redux提供了一个方法叫 bindActionCreators
let mapDispatchToProps = (dispatch) => {
  //如果再增加新的界面新的Action需要在此处绑定XxxAction为子页面调用方法的引用
  return {
    MainAction: bindActionCreators(MainLayoutAction, dispatch),
    reduxActions: bindActionCreators(Creator, dispatch)
  }
};
// console.log('main');
// console.log(MainLayout);
// console.log(Index);
let Main = connect(mapStateToProps, mapDispatchToProps)(MainLayout);
let Content = connect(mapStateToProps, mapDispatchToProps)(Add);
// console.log('mainover');
// console.log(Main);
// console.log(Content);

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            {/*背景板*/}
            <Route component={ AdfLayout }>
              {/*Routes */}
              {/*<Route path="mainLayout1" component={ Main } myStore={store.getState()}/>*/}
              {/*增加新页面时在此处配置且component已方程connect步骤,path为访问地址*/}
              <Route path="main" component={ Main }/>
              <Route path="content" component={ Content }/>
              <Route path="mainLayout3" component={ Main }/>
              {/*设置没有地址时跳转到的页面*/}
              <Redirect from="/" to="main"/>
            </Route>
          </ReduxRouter>
        </div>
      </Provider>
    )
  }
}


// ================================
// 将根组件挂载到 DOM，启动！
// ================================
const NODE = document.getElementById('app');
ReactDOM.render(
  <App />,
  NODE
);


// connect 会把State和dispatch转换成props传递给子组件。它看起来是下面这样的：
// 它会让我们传递一些参数：mapStateToProps，mapDispatchToProps，mergeProps（可不填）和React组件。
// 之后这个方法会进行一系列的黑魔法，把state，dispatch转换成props传到React组件上，返回给我们使用。
// mapStateToProps：
// mapStateToProps 是一个普通的函数。
// 当它被connect调用的时候会为它传递一个参数State。
// mapStateToProps需要负责的事情就是 返回需要传递给子组件的State，返回需要传递给子组件的State，
// 返回需要传递给子组件的State，（重要的事情说三遍。。。。）然后connect会拿到返回的数据写入到react组件中，然后组件中就可以通过props读取数据啦

/**
 * <Provider store={store}>
 <Router history={history} children={routes}/>
 </Provider>
 */

/**
 * 下面这货用于检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 *
 * 有关性能提升方面的问题
 * 诸如 PureComponent / shouldComponentUpdate / Immutable.js 等
 * 请自行查阅相关资料
 */

// Redux 是独立的，它与React没有任何关系。React-Redux是官方提供的一个库，用来结合redux和react的模块。
// React-Redux提供了两个接口Provider、connect。
// Provider是一个React组件，它的作用是保存store给子组件中的connect使用。
// 例如下面的，就是保存store给内部组件使用

// === Webpack 处理 assets，取消注释即可进行测试 === //
/* 处理 less / sass */
// import 'ASSET/less/normalize.less'
// import 'ASSET/scss/normalize.scss'

/* 处理 img，小于 10KB 的转为 base64，否则使用 URL */
// import base64 from 'ASSET/img/smaller.png'
// import url from 'ASSET/img/larger.png'

// function appendImgToBody(content) {
//   const img = document.createElement('img')
//   img.src = content
//   document.body.appendChild(img)
// }

// appendImgToBody(base64)
// appendImgToBody(url)


/**
 * 【拓展】
 *  react-redux 的 Provider 中传入的属性
 *  可以让全体组件轻松访问，避免繁琐累赘的层层下传。例子：
 *
 *  class XXX extends Component {
 *    static contextTypes = {
 *      // 组件中需要这样子声明
 *      store: PropTypes.object.isRequired
 *    }
 *    componentDidMount () {
 *      // 之后就可以直接这样用
 *      this.context.store.getState()
 *    }
 *  }
 *
 *  但上面这种官方的做法实在太麻烦，于是我们有更为直接的方式：
 *  import store from 'STORE'
 *  store.getState() // 只读，更改 state 只能通过 dispatch
 */
