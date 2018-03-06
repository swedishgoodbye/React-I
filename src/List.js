import React, { Component } from 'react';
import DoneList from './DoneList.js'
import './style/List.css'


class TheList extends Component {
    constructor() {
        super();
        this.state = {
            doList: [],
            newDo: ''
        };
    }

    addDo = (event) => {
        event.preventDefault();
        const doList = this.state.doList;
        doList.push(this.state.newDo);
        this.setState({
            newDo: '',
            doList: doList
        });
    };

    // styleDo = () => {
    //     newDo.element.style = "border: 1px solid black";
    // }
    
    handleNewDoInput = (event) => {
        this.setState({ newDo: event.target.value });
    };

    render() {
        //  const borderStyle = { border: '1px black solid'};
        return (
            <div>
                {this.state.doList.map(item => <DoneList done={item} />)}
{/* <div>{item}</div>)} */}
                <form onSubmit={this.addDo}>

                    <input className="doTextBox" type="text" onChange={this.handleNewDoInput} placeholder="-New Do Here-" value={this.state.newDo} />
                </form>
            </div>

        );
    }
}

export default TheList;