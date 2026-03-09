import React, { Component, PureComponent } from 'react'

// export class ChildClassComp extends Component {
export class ChildClassComp extends PureComponent {
  render() {
    console.log("child class",this.props.data);
    
    return (
      <div>
        <h1>Name is {this.props.data}</h1>
      </div>
    )
  }
}

export default ChildClassComp
