import * as React from 'react'

interface IProps extends React.HTMLProps<HTMLInputElement> {
    customProperty?: string;
}

interface IState {
    value: string;
}

class InputValue extends React.Component<IProps, IState> {
    state: IState = { value:''};

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        this.setState(() => ({ value }));
    };

  render()
  {
      const {
          customProperty="100500"
      } = this.props;
      return (
          <div className='container_inputs'>
              <h4>{customProperty}</h4>
              <form>
                   <div className="btn-group w-100">
                       <input className='form-control'/>
                       <button className="btn btn-primary">$$</button>
                   </div>
                      <div className="list-group-item search_input">
                          <input type="text" className="form-control border-0"
                                 placeholder={`Ввод`}
                          />
                      </div>
                      <ul className='list-group filter_items_list'>
                          <li className='list-group-item'>1</li>
                          <li className='list-group-item'>1</li>
                          <li className='list-group-item'>1</li>
                          <li className='list-group-item'>1</li>
                      </ul>
              </form>
          </div>
      );
  }
}

export default InputValue;