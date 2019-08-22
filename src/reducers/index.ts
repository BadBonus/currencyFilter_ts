import {IState} from '../models'

const initialState:IState = {
    inputValue1:0,
    inputValue2:0,
    valueCurrency1:1,
    valueCurrency2:1,
    abbr1:'BYN',
    abbr2:'BYN',
    scale1:1,
    scale2:1,
    currencies:[{abbr: "BYR",
                id: 0,
                name: "Белорусский рубль",
                scale: 1,
                value: 1}]
};

const reducer = (state:IState = initialState, action:any):IState => {
    let findedCur;

    switch (action.type)
    {
        case "TEST":
            console.log('Reducer ответил');
            console.log(state);
            return state;
        case "FETCH_LAST_CURRENCIES":
            return {...state, currencies:[...action.payload, ...state.currencies]};
        case "CHANGE_ABBR1":
            findedCur=state.currencies.find(el=>el.abbr===action.payload);
            return {...state,
                    abbr1:action.payload,
                    valueCurrency1:findedCur.value,
                    inputValue2:+((findedCur.value/findedCur.scale/(state.valueCurrency2/state.scale2))*state.inputValue1).toFixed(3),
                    scale1:findedCur.scale
            };
        case "CHANGE_ABBR2":
            findedCur = state.currencies.find(el=>el.abbr===action.payload);
            return {...state,
                    abbr2:action.payload,
                    valueCurrency2:findedCur.value,
                    inputValue1:+((findedCur.value/findedCur.scale/(state.valueCurrency1/state.scale1))*state.inputValue2).toFixed(3),
                    scale2:findedCur.scale
            };
        case "CHANGE_VALUE1":
            return {...state,
                inputValue2:+((state.valueCurrency1/state.scale1/(state.valueCurrency2/state.scale2))*action.payload).toFixed(3),
                inputValue1:action.payload};
        case "CHANGE_VALUE2":
            return {...state,
                inputValue1: +((state.valueCurrency2/state.scale2/(state.valueCurrency1/state.scale1))*action.payload).toFixed(3),
                inputValue2:action.payload};
        default:return state;
    }
};




export default reducer;