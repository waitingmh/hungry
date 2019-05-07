import React, { Component } from 'react'
import axios from 'axios'
class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    const {
      match:{
        params:{
          id
        }
      }
    } = this.props;
    axios.get(`/list`,{
      data:{
        id:id
      }
    }).then(res=>{
      this.setState({
        data:res.data.newlist
      })
    })
  }
  render() {
    const {data} = this.state;
    
    return (
      <div>
        {
          data && data.map((v,i)=>{
            return <div key={i}>
              <h2>{v.title}</h2>
              <p>月售{v.num}</p>
            </div>
          })
        }
      </div>
    )
  }
}
export default Detail;