import * as React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {IState} from './models'
import {fetchLatestCurrencies, test} from './actions'

import InputValue from './components/inputValue'

class App extends React.Component<any>{

    componentDidMount()
    {
        this.props.fetchLatestCurrencies();
    }

        render()
        {
            const {currencies, typeCur1}:any = this.props;
            return (
                <div className='container'>
                    <div className="row">
                        <div className="col-5">
                            <InputValue listData={currencies}/>
                        </div>
                        <div className="col-5 offset-2">
                            <InputValue listData={currencies}/>
                        </div>
                    </div>
                </div>
            );
        }
}
const mapStateToProps = ({currencies, input1, input2}:IState)=>({
    currencies: currencies.map(el=>
        ({  name:el.name+' '+el.abbr,
            id:el.id,
            abbr:el.abbr
        }))
});

const mapDispatchToProps = (dispatch:any) =>{
    return {
        fetchLatestCurrencies: ()=>dispatch(fetchLatestCurrencies())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
