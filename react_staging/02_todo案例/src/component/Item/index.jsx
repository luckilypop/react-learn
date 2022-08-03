import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  // 默认state，鼠标滑过
  state = {mouse: false}
  // 处理鼠标滑过的背景颜色
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  // 处理check
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id, event.target.checked);
    }

  }
 // 删除任务 
  handelDelete = (id)=>{
    return () =>{
    if(window.confirm("是否删除该任务？")){
      this.props.deleteTodo(id);
    }
    this.props.deleteTodo(id);
    }

  }
  render() {
    const {id, name, done} = this.props;
    const {mouse} = this.state;
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input onChange={this.handleCheck(id)} type="checkbox" checked={done}/>
          <span>{name}</span>
        </label>
        <button onClick={this.handelDelete(id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
    </li>
    )
  }
}

