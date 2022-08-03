import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 全选按钮
  checkAll = (event)=>{
    return this.props.checkedAll(event.target.checked)
  }
  // 删除已经完成的任务 
  clearAllDone = ()=>{
    if(window.confirm("是否删除所有已经完成任务？")) this.props.clearedAllDone();    
  }
  render() {
    const {todos} = this.props;
    // 计算所有的任务
    const total = todos.length;
    // 计算已经完成的任务
    const doneCount = todos.reduce((prev, todo)=>{
      return prev + (todo.done ? 1: 0);
    },0)
    return (
        <div className="todo-footer">
            <label>
                <input onChange={this.checkAll} type="checkbox" checked={doneCount === total && total ? true:false}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}

