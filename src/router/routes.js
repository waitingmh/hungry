import Home from "../view/home";
import Detail from "../view/default/detail";
import OutSide from "../view/default/outside";
import Order from "../view/order";
import Find from "../view/find";
import Mine from "../view/mine";

const routes = [
    {  
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/outside',
                component:OutSide
            },
            {
                path:'/home/order',
                component:Order
            },
            {
                path:'/home/find',
                component:Find
            },
            {
                path:'/home/mine',
                component:Mine
            },
            {
                path:'/home',
                redirect:'/home/outside'
            },
        ]
    },
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/detail/:id',
        component:Detail
    },

]

export default routes