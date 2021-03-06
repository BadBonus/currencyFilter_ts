import {IAction, IState} from '../models'
import Service from './../services/service'

const service = new Service();

const fetchLatestCurrencies =  () : any=> (dispatch:any, state:IState) : any => {
    dispatch(()=>service.getCurrenciesLatest().then(data=>dispatch({type:"FETCH_LAST_CURRENCIES", payload:data})));
};
const changeAbbr1 = (abbr:string):IAction<{}> => {
    return{type:"CHANGE_ABBR1", payload:abbr}
};

const changeAbbr2 = (abbr:string):IAction<{}> => {
    return{type:"CHANGE_ABBR2", payload:abbr}
};

const changeValue1 = (value:number):IAction<{}> => {
    return{type:"CHANGE_VALUE1", payload:value}
};

const changeValue2 = (value:number):IAction<{}> => {
    return{type:"CHANGE_VALUE2", payload:value}
};

export {
    fetchLatestCurrencies,
    changeAbbr1,
    changeAbbr2,
    changeValue1,
    changeValue2
};
