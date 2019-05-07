import React, { Component } from 'react'
import RouterView from '../router/routerView'
import {NavLink} from 'react-router-dom'
class Home extends Component {
  render() {
    const {routes} = this.props
    return (
      <div className="box">
        <RouterView routes={routes}></RouterView>
        <footer>
          <NavLink to="/home/outside" activeClassName="skyC">
            <dl>
              <dt className="iconfont icon-cainixihuan"></dt>
              <dd>外卖</dd>
            </dl>
          </NavLink>
          <NavLink to="/home/order" activeClassName="skyC">
            <dl>
              <dt className="iconfont icon-dingdan"></dt>
              <dd>订单</dd>
            </dl>
          </NavLink>
          <NavLink to="/home/find" activeClassName="skyC">
            <dl>
              <dt className="iconfont icon-faxianjihuo"></dt>
              <dd>发现</dd>
            </dl>
          </NavLink>
          <NavLink to="/home/mine" activeClassName="skyC">
            <dl>
              <dt className="iconfont icon-wode"></dt>
              <dd>我的</dd>
            </dl>
          </NavLink>
        </footer>
      </div>
    )
  }
}
export default Home;