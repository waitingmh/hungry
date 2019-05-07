import axios from 'axios'
import '../../mock/mock'

export const curData = (type) =>{
    return (dispatch,getState)=>{
        let {list} = getState()
       if(type==='all'){
        axios.get('/all').then(res=>{
            dispatch({
                type:'ALLDATA',
                data:res.data.data
            })
        })
       }else if(type==='high'){
        list && list.sort((a,b)=>{
          return b.num-a.num;
        })
        dispatch({
            type:'ALLDATA',
            data:list
        })
       }else if(type==='slow'){
        list && list.sort((a,b)=>{
            return a.km-b.km;
          })
          dispatch({
              type:'ALLDATA',
              data:list
          })
       }
    }
}
export const getData = () =>{
    return dispatch=>{
        axios.get('/all').then(res=>{
            dispatch({
                type:'ALLDATA',
                data:res.data.data
            })
        })
    }
}

export const curValue = (val) =>{
    return (dispatch,getState)=>{
        
        axios.get('/mohu',{
            data:{
              value:val
            }
         }).then(res=>{
            dispatch({
                type:'ALLDATA',
                data:res.data.data
            })
         })
    }
}