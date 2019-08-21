import {IState} from '../models'

const initialState:IState = {
    inputValue1:0,
    inputValue2:0,
    countCurrency1:1,
    countCurrency2:1,
    abbr1:'BYR',
    abbr2:'BYR',
    currencies:[{abbr: "BYR",
                id: 0,
                name: "Белорусский рубль",
                scale: 1,
                value: 1}]
};

const reducer = (state:IState = initialState, action:any):IState => {
    switch (action.type)
    {

        case "TEST":
            console.log('Reducer ответил');
            console.log(state);
            return state;
        case "FETCH_LAST_CURRENCIES":
            return {...state, currencies:[...action.payload, ...state.currencies]};
        case "CHANGE_ABBR1":
            return {...state,
                    abbr1:action.payload,
                    countCurrency1:state.currencies.find(el=>el.abbr===action.payload).value,
                    inputValue2:+((state.currencies.find(el=>el.abbr===action.payload).value/state.countCurrency2)*state.inputValue1).toFixed(3)
            };
        case "CHANGE_ABBR2":
            return {...state,
                    abbr2:action.payload,
                    countCurrency2:state.currencies.find(el=>el.abbr===action.payload).value,
                    inputValue1:+((state.currencies.find(el=>el.abbr===action.payload).value/state.countCurrency1)*state.inputValue2).toFixed(3)};
        case "CHANGE_VALUE1":
            return {...state,
                inputValue2:+((state.countCurrency1/state.countCurrency2)*action.payload).toFixed(3),
                inputValue1:action.payload};
        case "CHANGE_VALUE2":
            return {...state,
                inputValue1: +((state.countCurrency2/state.countCurrency1)*action.payload).toFixed(3),
                inputValue2:action.payload};
        default:return state;
    }
};




export default reducer;