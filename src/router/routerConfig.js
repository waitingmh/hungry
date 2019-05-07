import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './routerView'
import Routes from './routes'

class RouterConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouterView routes={Routes}></RouterView>
      </BrowserRouter>
    )
  }
}
export default RouterConfig;