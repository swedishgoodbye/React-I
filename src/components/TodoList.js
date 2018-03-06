import React, { Component } from 'react';
import '../style/DoneListStyle.css';

class TodoList extends Component {
    constructor(){
    super();
    this.state = {
        clicked: false
    };
  }

  handleClick = () => {
      this.setState({clicked: !this.state.clicked});
      console.log('clicked')
  }

  handleXClick = () => {
      this.props.action(this.props.index);
  }

  render() {
     
      const styles = this.state.clicked ? { textDecoration: 'line-through', color: 'white', background: '#809DFD'} : {textDecoration: 'none' };
    //   const del = this.state.clicked 
      return (
        <div className='doneItem' style={styles} onClick={this.handleClick}>{this.props.done}</div>
        //   <div>
        //    <div id="one" onClick={this.handleXClick}>X</div>
        //    <div id="two" className='doneItem' style={styles} onClick={this.handleClick}>{this.props.done}</div>
        //   </div>
      )
      
  }
}

export default TodoList;