import React, { Component } from 'react';

class Cell extends Component {
  
  constructor(props){
    super()
    this.state = {
      color: props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render(){
    return(
      <div className="cell" 
      style={{backgroundColor:this.props.value}}
      onclick={this.handleClick}>
      </div>
    )
  }
}

export default Cell;