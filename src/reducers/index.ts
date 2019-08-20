import {IState} from '../models'

const initialState:IState = {
    input1:0,
    input12:0,
    typeCur1:'USD',
    typeCur2:'USD',
    currencies:[]
};

const reducer = (state:IState = initialState, action:any):IState => {

    switch (action.type)
    {
        case "TEST":
            console.log('Reducer ответил');
            console.log(state);
            return state;
        default:return state;

    }
};




export default reducer;