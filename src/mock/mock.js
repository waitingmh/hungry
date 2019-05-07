import Mock from 'mockjs'

const datalist = [
    {
        img:'../img/glc.jpg',
        title:'嗨果切',
        num:45,
        km:427,
        id:0
    },
    {
        img:'../img/glc.jpg',
        title:'嗨果切1',
        num:45,
        km:427,
        id:1
    },
    {
        img:'../img/hbb.jpg',
        title:'大汉堡',
        num:20,
        km:567,
        id:3
    },
    {
        img:'../img/glc.jpg',
        title:'嗨果切2',
        num:45,
        km:427,
        id:2
    },
    {
        img:'../img/hbb.jpg',
        title:'大汉堡嗨果',
        num:20,
        km:567,
        id:4
    },
    {
        img:'../img/jt.jpg',
        title:'鸡腿快餐',
        num:40,
        km:400,
        id:5
    },
    
    {
        img:'../img/jt.jpg',
        title:'炸鸡',
        num:40,
        km:400,
        id:7
    },
    {
        img:'../img/kl.jpg',
        title:'可乐送',
        num:60,
        km:200,
        id:8
    },
    {
        img:'../img/jt.jpg',
        title:'大鸡腿',
        num:40,
        km:400,
        id:6
    },
    {
        img:'../img/xb.jpg',
        title:'可乐送11',
        num:70,
        km:300,
        id:9
    }
]
Mock.mock('/all',()=>{
   return {
       code:1,
       data:datalist
   }
})

Mock.mock('/list',(data)=>{
    let datas = JSON.parse(data.body)
    let {
        id
    } = datas
    let newList = datalist.filter(v=>{
        return v.id==id
    })
    return {
        newlist:newList
    }
 })

 Mock.mock('/mohu',(options)=>{
    let data = JSON.parse(options.body)
   return {
       code:1,
       data:datalist.filter(v=>{
           return v.title.indexOf(data.value)!==-1
       })
   }
 })