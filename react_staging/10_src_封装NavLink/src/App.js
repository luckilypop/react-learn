import React, { Component } from 'react';
import { Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Header from './component/Header';
import MyNavLink from './component/MyNavLink';

export default class App extends Component {
  render() {
    return (
      
      <div>
       <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 形成路由器，在React中靠路由链接实现切换组件--编写路由链接，原生用a实现页面切换 */}
              {/* NavLink 比 Link 多一个高亮  */}
              <MyNavLink to="/home">Home</MyNavLink>
              <MyNavLink to="/about">About</MyNavLink>
                  
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  {/* 设置默认路由  */}
                  <Route path="" element={<Homepage/>} /> 
                  {/* 区分路由 */}
                  <Route path="/home" element={<Homepage/>} /> 
                  <Route path="/about" element={<About/>} />
                </Routes>           
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
