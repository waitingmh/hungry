import React, { Component } from 'react'
import * as AllAction from '../store/action/list.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BScroll from 'better-scroll'
let timer;
class Find extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  getValue = (e) =>{
    let val = e.target.value;
    const {curValue} = this.props
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{     
        curValue(val)
    },500)
    
  }
  componentDidMount(){
    const {getData} = this.props
    getData()
    new BScroll('.content',{
      probeType:2,
      click:true
    })
  }
  render() {
    const {list} = this.props;
    return (
      <div className="find"> 
         <header>
          <div className="form">
              <span className="iconfont icon-search"></span>
              <input type="text" onChange={(e)=>this.getValue(e)}/>
          </div>
         </header>
         <div className="content">
          <div>
            {
              list && list.map((v,i)=>{
                  return <div className="con" key={i} onClick={()=>this.getDetail(v.id)}>
                    <img src={v.img} alt=""/>
                    <div className="disr">
                      <h4>{v.title}</h4>
                      <p>月销<b> {v.num}</b></p>
                      <span>{v.km}m</span>
                    </div>
                  </div>
              }) 
            }
          </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(AllAction,dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Find);
