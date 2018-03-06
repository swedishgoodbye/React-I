import React, { Component } from 'react';
import DoneList from './DoneList.js'
import './style/List.css'


class TheList extends Component {
    constructor() {
        super();
        this.state = {
            doList: [],
            newDo: '',
            selected: null
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

    deleteDo = (index) => {
        const doList = this.state.doList;
        this.setState({
            selected: index,
        });
        doList.splice(index, 1)
    }

    render() {
        //  const borderStyle = { border: '1px black solid'};
        
        return (
            <div>
                {this.state.doList.map((item, i) => <DoneList key={i} index={i} done={item} action={this.deleteDo} />)}
{/* <div>{item}</div>)} */}
                <form onSubmit={this.addDo}>

                    <input className="doTextBox" type="text" onChange={this.handleNewDoInput} placeholder="-New Do Here-" value={this.state.newDo} />
                </form>
            </div>

        );
    }
}

export default TheList;