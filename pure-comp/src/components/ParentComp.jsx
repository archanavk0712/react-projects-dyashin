import React, { Component, useState } from 'react'
import ChildClassComp from './ChildClassComp';
import ChildFuncComp from './ChildFuncCOmp';

 class ParentComp extends Component {
    state={
        data:"dodo"
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({data:"gogo"})
        }, 2000);
    }
  render() {
    return(
      <div>
        <ChildClassComp data={this.state.data}/>
        <ChildFuncComp data={this.state.data}/>
      </div>
      )
  }
}

export default ParentComp
