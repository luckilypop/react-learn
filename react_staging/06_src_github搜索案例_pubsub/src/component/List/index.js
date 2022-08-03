import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import Item from '../Item'

export default class list extends Component {
  // 初始化状态
  state = {
    isFirst:true, // 是否第一次进入搜索页面
    isLoading:false, // 是否正在搜索
    users:[], // 搜索结果的数据
    err:"" // 获得数据出错
  };

  componentDidMount(){
    this.token = PubSub.subscribe('atguigu',(_, state)=>{
      this.setState(state);
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }

  render() {
    // 得到此时的state
    const {isFirst, isLoading, err, users} = this.state;
    // 不同的state返回不同的list展示框，三元运算符！
    return (
        <div className="row">
          {
          isFirst ? <h1>欢迎使用，输入关键字，随后点击搜索</h1> :
          isLoading ? <h1>Lading....</h1> :
          err ? <h1 style={{color:"red"}}>{err.message}</h1> :         
          users.map( (user) =>{
              return (<Item key={user.id} {...user}/>)
          })
          }
        </div>
        
    )
  }
}
