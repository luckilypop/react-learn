import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component {
  // 初始化状态
  state = {
    isFirst:true, // 是否第一次进入搜索页面
    isLoading:false, // 是否正在搜索
    users:[], // 搜索结果的数据
    err:"" // 获得数据出错
  };
  // 更新state
  updateAppState = (state)=>{
    this.setState(state);
  }
  render() {
    return (
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
    )
  }
}
