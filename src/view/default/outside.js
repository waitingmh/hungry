import React, { Component } from 'react'
import Content from './content'
import * as AllAction from '../../store/action/list.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BScroll from 'better-scroll'
class OutSide extends Component {
  constructor(props){
    super(props)
    this.state = {
      type:'all'
    }
  }
  componentDidMount(){
    const {curData} = this.props
    curData('all')
    new BScroll('.content',{
      probeType:2,
      click:true
    })
  }
  render() {
    const {type} = this.state
    return (
      <div className="outside">
         <header>饿了么</header>
         <div className="nav">
           <span onClick={()=>this.getData('all')} className={type==='all'?'blakC':''}>综合排序</span>
           <span onClick={()=>this.getData('high')} className={type==='high'?'blakC':''}>销量最高</span>
           <span onClick={()=>this.getData('slow')} className={type==='slow'?'blakC':''}>距离最近</span>
           </div>
         <Content></Content>
      </div>
    )
  }
  getData=(types)=>{
    const {curData} = this.props
    this.setState({
      type:types
    })
    curData(types)
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(AllAction,dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(OutSide);