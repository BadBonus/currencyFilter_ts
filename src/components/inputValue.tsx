import * as React from 'react'
import {IPropsInput, IStateInput} from '../models'
import {connect} from 'react-redux'


class InputValue extends React.Component<IPropsInput, IStateInput> {
    state: IStateInput = {
        value:0,
        listOpen:false,
        nameOfCurrencies:[],
        searchWord:'',
    };

    changeStateList = ():void => {
        this.setState(() => ({ listOpen:!this.state.listOpen }));
    };

    changeSearchWord = (text:string):void =>{
        this.setState({ searchWord:text});
    };

    handleOutsideClick = (e:any) =>
    {
        if(e.target.closest(`#${this.props.id}`)===null)
        {
            this.setState({listOpen:false})
        }
    };
    componentDidMount()
    {
        document.addEventListener('click', this.handleOutsideClick, false);
    }

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
      const {changeAbbr, abbr, value, changeValue, id} = this.props;
      let listOfCurrencies:any[] = [];
      if(this.state.nameOfCurrencies.length>0)
      {
          if (this.state.searchWord.trim().length!==0)
          {
              rawData=rawData.filter(el=>el.name.toLowerCase().includes(this.state.searchWord.toLowerCase()));
          }
          listOfCurrencies = rawData.map(el=>{
              return <li className='list-group-item li_currency p-0' key={el.id}>
                  <button className="btn w-100 text-white p-3"
                            onClick={e=>{
                            e.preventDefault();
                                changeAbbr(el.abbr);
                            }
                            }>
                          {el.name}
                          </button>
                      </li>
          })
      }

      return (
          <div className='container_inputs'>
              <form id={id}>
                   <div className="btn-group w-100">
                       <input className='inputValue text-center'
                              type='text'
                              value={value}
                              onChange={e=>{

                                  changeValue(+(e.target.value).replace(/\D+/g,""));
                              }}
                       />
                       <button className="btn btn-primary"
                               onClick={(e)=>{e.preventDefault();this.changeStateList()}}>{abbr}</button>
                   </div>
                      <div className={`helperList ${this.state.listOpen?null:'d-none'}`} >
                          <div className="list-group-item search_input p-0">
                              <input type="text" className="form-control border-0"
                                     placeholder={`Введите название валюты`}
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