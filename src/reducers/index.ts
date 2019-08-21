import {IState} from '../models'

const initialState:IState = {
    input1:0,
    input2:0,
    abbr1:'BYR',
    abbr2:'USD',
    currencies:[]
};

const reducer = (state:IState = initialState, action:any):IState => {

    switch (action.type)
    {
        case "TEST":
            console.log('Reducer ответил');
            console.log(state);
            return state;
        case "FETCH_LAST_CURRENCIES":
            return {...state, currencies:[...action.payload]};
        default:return state;
    }
};




export default reducer;