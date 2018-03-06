import React, { Component } from 'react';
import './style/DoneListStyle.css';

class DoneList extends Component {
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

  handleDelete = (index) => {
      this.props.action(this.props.index);
      this.setState({clicked: !this.state.clicked}) 
      console.log('x');
      
      
      
      
      
  }

  render() {
     
      const styles = this.state.clicked ? { textDecoration: 'line-through', color: 'white', background: '#809DFD'} : {textDecoration: 'none' };
      const disp = this.setState().clicked = {display: 'none'};
      return (
        <div>
          <div className='doX' style={disp} onClick={this.handleDelete}>X</div>
          <div className='doneItem' style={styles} onClick={this.handleClick}>{this.props.done}</div>
        </div>
      )
  }
}

export default DoneList;