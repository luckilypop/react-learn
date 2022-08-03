import React, { Component } from 'react';
import Header from'./component/Header'
import Footer from './component/Footer'
import List from './component/List'

import './App.css'
export default class App extends Component {

  // 初始化状态
  state = {
    todos:[
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '打代码', done: false},
    ]
  }
  // 增加todo任务，Header组件
  addTodo = (todoObj)=>{
    const {todos} = this.state;
    const newTodos = [todoObj,...todos];
    this.setState({todos:newTodos});
  }
  // 更新todo，任务是否完成，check改变done值，List-->Item组件
  updateTodo = (id, done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todo)=>{
      if(todo.id === id) return {...todo, done}
      else return todo
    });
    this.setState({todos:newTodos});
  }
  // 删除某一个任务，button按钮，List-->Item组件
  deleteTodo =(id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos:newTodos});
  }
  // 选中所有的任务，check，Footer组件
  checkedAll = (done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todo)=>{
      return {...todo, done}
    });
    this.setState({todos:newTodos});
  }
  // 删除所有完成的任务，button，Footer组件
  clearedAllDone = ()=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todo)=>{
      return !todo.done
    })
    this.setState({todos:newTodos});
  }
    
  render() {
    const {todos} = this.state;
    return (     
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkedAll={this.checkedAll} clearedAllDone={this.clearedAllDone}/>
    </div>
  </div>
    )
  }
}
