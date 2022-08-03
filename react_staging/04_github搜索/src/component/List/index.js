import React, { Component } from 'react'
import Item from '../Item'

export default class list extends Component {
  render() {
    // 得到此时的state
    const {isFirst, isLoading, err, users} = this.props;
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
