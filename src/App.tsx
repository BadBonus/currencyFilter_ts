import * as React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {IState} from './models'

import InputValue from './components/inputValue'

const App: React.FC<{}> = ({typeCur1}:any) => {
        return (
            <div className='container'>
                <mark>{typeCur1}</mark>
                <div className="row">
                    <div className="col-5">
                        <InputValue />
                    </div>
                    <div className="col-5 col-offset-2">
                        <InputValue />
                    </div>
                </div>
            </div>
        );
};
const mapStateToProps = ({typeCur1}:IState)=> ({
    typeCur1: typeCur1
});
export default connect(mapStateToProps)(App);
