import {IAction, IState} from '../models'
import Service from './../services/service'

const service = new Service;

const test = ():IAction<{}>=>{
    console.log('From actions');
    return{type:"TEST"}
};

const fetchLatestCurrencies =  () : any=> (dispatch:any, state:IState) : any => {
    dispatch(()=>service.getCurrenciesLatest().then(data=>dispatch({type:"FETCH_LAST_CURRENCIES", payload:data})));
};

const changeValue = (numberInput:number, value:number):IAction<{}>=>{
    return{type:"CHANGE_VALUE", payload:{numberInput:numberInput, value:value}}
};

export {
    test,
    fetchLatestCurrencies
};
