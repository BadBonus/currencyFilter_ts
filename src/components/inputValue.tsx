import * as React from 'react'
import {IPropsInput, IStateInput} from '../models'


class InputValue extends React.Component<IPropsInput, IStateInput> {
    state: IStateInput = {
        value:0,
        listOpen:false,
        nameOfCurrencies:[],
        searchWord:'',
        abbr:'USD'
    };

    changeStateList = ():void => {
        this.setState(() => ({ listOpen:!this.state.listOpen }));
    };

    changeSearchWord = (text:string):void =>{
        this.setState({ searchWord:text});
    };

    componentDidUpdate(prevProps:any)
    {
        if(prevProps.listData !== this.props.listData)
        {
            this.setState({nameOfCurrencies:[...this.props.listData]})
        }
    }

  render()
  {
      let rawData = this.state.nameOfCurrencies;
      let listOfCurrencies:any[] = [];
      if(this.state.nameOfCurrencies.length>0)
      {
          if (this.state.searchWord.trim().length!==0)
          {
              rawData=rawData.filter(el=>el.name.toLowerCase().includes(this.state.searchWord.toLowerCase()));
          }
          listOfCurrencies = rawData.map(el=>{
              return <li className='list-group-item li_currency p-0'><button className="btn w-100 text-white p-3">
                          {el.name}
                          </button>
                      </li>
          })
      }
      console.log(listOfCurrencies);
      return (
          <div className='container_inputs'>
              <form>
                   <div className="btn-group w-100">
                       <input className='w-75 text-center'/>
                       <button className="btn btn-primary"
                               onClick={(e)=>{e.preventDefault();this.changeStateList()}}>{this.state.abbr}</button>
                   </div>
                      <div className={`helperList ${this.state.listOpen?null:'d-none'}`}>
                          <div className="list-group-item search_input p-0">
                              <input type="text" className="form-control border-0"
                                     placeholder={`Ввод`}
                                     onChange={e=>{
                                         this.changeSearchWord(e.target.value);
                                     }}
                                     value={this.state.searchWord}
                              />
                          </div>
                          <ul className='list-group filter_items_list'>
                              {listOfCurrencies}
                          </ul>
                      </div>
              </form>
          </div>
      );
  }
}

export default InputValue;