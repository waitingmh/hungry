import React, { Component } from 'react'
import * as AllAction from '../../store/action/list.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
class Content extends Component {
  render() {
    const {list} = this.props;
    return (
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
    )
  }
  getDetail = (id) =>{
      this.props.history.push(`/detail/${id}`)
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(AllAction,dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Content));