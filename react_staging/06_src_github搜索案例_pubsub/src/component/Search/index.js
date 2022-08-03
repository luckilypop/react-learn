import axios from 'axios';
import PubSub, { publish } from 'pubsub-js';
import React, { Component } from 'react'

export default class Search extends Component {

  searchDate = ()=>{
    // 得到input节点的内容
    const {keyWordElement:{value:keyWord}} = this;
    // 第一次设置state状态:发送网络请求
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})

    // 开始请求数据
    axios.get(`/api1/search/users2?q=${keyWord}`).then(
      response => {
        // 请求成功,返回数据items
        PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
      },
      error => {
        // 请求失败,返回错误message
        PubSub.publish('atguigu',{isLoading:false,err:error})
      }
    )

  }
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索github用户</h3>
            <div>
                <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                <button onClick={this.searchDate}>搜索</button>
            </div>
        </section>
    )
  }
}
