
const initState = {
    list:[]
}

const ListReducer = (state = initState, action) => {
    switch (action.type) {   
        case 'ALLDATA':
        return {...state,list:[...action.data]}
        default:
            return state;
    }
};
export default ListReducer;