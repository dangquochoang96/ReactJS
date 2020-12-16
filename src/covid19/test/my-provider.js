import React from 'react';
import MyContext from './my-context';
import { api } from '../service/api';

// tao provider de chia se du lieu
class MyProvider extends React.Component {
  // co  du lieu gi can chia se thi thao tac o day
  constructor(){
    super();
    this.state = {
      virus: [],
      loading: false
    }
  }

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    })
  }

  async componentDidMount(){
    await this.setStateAsync({loading: true})
    const data = await api.getDataVirusCorona();
    await this.setStateAsync({...this.state,virus: data, loading: false});
  }

  render(){
    return(
      <MyContext.Provider
        value={this.state}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default MyProvider;