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

  handleDelete = () => {
      this.props.action(this.props.index);
  }

  render() {
     
      const styles = this.state.clicked ? { textDecoration: 'line-through', color: 'white', background: '#809DFD'} : {textDecoration: 'none' };
      return (
        <div>
          <div className='doX' onClick={this.handleDelete}>X</div>
          <div className='doneItem' style={styles} onClick={this.handleClick}>{this.props.done}</div>
        </div>
      )
  }
}

export default DoneList;