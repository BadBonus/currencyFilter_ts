import * as React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {IState} from './models'
import {fetchLatestCurrencies,
    changeAbbr1,
    changeAbbr2,
    changeValue1,
    changeValue2} from './actions'

import InputValue from './components/inputValue'

const mapStateToProps = ({currencies, inputValue1, inputValue2, abbr1, abbr2}:IState)=>({
    currencies: currencies.map(el=>
        ({  name:el.name+' '+el.abbr,
            id:el.id,
            abbr:el.abbr
        })),
    abbr1,
    abbr2,
    inputValue1,
    inputValue2
});

const mapDispatchToProps = (dispatch:Dispatch) =>({
    fetchLatestCurrencies: ()=>dispatch(fetchLatestCurrencies()),
    changeAbbr1: (abbr:string)=> {dispatch(changeAbbr1(abbr))},
    changeAbbr2: (abbr:string)=> {dispatch(changeAbbr2(abbr))},
    changeValue1:(value:number)=> {dispatch(changeValue1(value))},
    changeValue2:(value:number)=> {dispatch(changeValue2(value))}
});

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

class App extends React.Component<Props>{

    componentDidMount()
    {
        this.props.fetchLatestCurrencies();
    }

        render()
        {
            const {currencies}:any = this.props;
            return (
                <div className='container'>
                    <div className="row mt-5">
                        <div className="col-12 justify-content-center d-flex flex-column align-items-center text-center">
                            <h2>Простой конвертер валют</h2>
                            <p>
                                Конвертер для своей работы использует библиотеку <a target="_blank" rel="noopener noreferrer" href="https://ru.reactjs.org/">React </a>
                                 с использованием typescript.
                                <br/>
                                Для получения актуальных данных по текущим курсам валют используется <a rel="noopener noreferrer"  href="http://www.nbrb.by/APIHelp/ExRates" target='_blank'>API</a> предоставляемым
                                национальным банком РБ
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-5">
                            <InputValue listData={currencies} abbr={this.props.abbr1}
                                        value={this.props.inputValue1}
                                        changeAbbr={this.props.changeAbbr1}
                                        changeValue={this.props.changeValue1}
                                        id='inp1'
                            />
                        </div>
                        <div className="col-5 offset-2">
                            <InputValue listData={currencies} abbr={this.props.abbr2}
                                        value={this.props.inputValue2}
                                        changeAbbr={this.props.changeAbbr2}
                                        changeValue={this.props.changeValue2}
                                        id='inp2'
                            />
                        </div>
                    </div>
                </div>
            );
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
