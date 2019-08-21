import * as React from "react";

export interface IState {
    input1:number,
    input2:number,
    abbr1:string,
    abbr2:string,
    currencies: any[],
}

export interface IAction<type>{
    type: string,
    payload?: type
}

export interface IPropsInput extends React.HTMLProps<HTMLInputElement> {
    listData: string[];
}

export interface IStateInput {
    value: number,
    listOpen:boolean,
    searchWord: string,
    nameOfCurrencies:any[],
    abbr: string
}