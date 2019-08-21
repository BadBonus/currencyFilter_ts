import * as React from "react";

export interface IState {
    inputValue1:number,
    inputValue2:number,
    countCurrency1:number,
    countCurrency2:number,
    abbr1:string,
    abbr2:string,
    currencies: any[],
}

export interface IAction<type>{
    type: string,
    payload?: type
}

export interface IPropsInput extends React.HTMLProps<HTMLInputElement> {
    listData: string[],
    abbr:string,
    changeAbbr(abbr:string): void,
    changeValue(value:number): void,
    id:string
}

export interface IStateInput {
    value: number,
    listOpen:boolean,
    searchWord: string,
    nameOfCurrencies:any[],
}