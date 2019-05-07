import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
class RouterView extends Component {
  render() {
    const {routes} = this.props
    const isRedirect = routes && routes.length > 0 && routes.filter(v=>v.redirect)
    const redirectRouter =  isRedirect && isRedirect.length > 0 && isRedirect.map((v,i)=>{
        return <Redirect from={v.path} to={v.redirect} key={i}></Redirect>
    })
    return (
        <Switch>
          {
              routes.map((v,i)=>{
                  if(v.component){
                     return <Route path={v.path} component={(apiRouter)=>{
                         return <v.component routes={v.children} {...apiRouter}></v.component>
                     }} key={i}></Route>
                  }
              }).concat(redirectRouter)
          }
        
        </Switch>
    )
  }
}
export default RouterView;