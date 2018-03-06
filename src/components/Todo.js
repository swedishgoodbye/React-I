import React, { Component } from 'react';
import TodoList from './TodoList.js'
import '../style/List.css'


class Todo extends Component {
    constructor() {
        super();
        this.state = {
            doList: [],
            newDo: '',
            // selected: null
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

    deleteDo = (item) => {
        this.setState({
            newDo: this.newDo.remove
        })
    };

    // styleDo = () => {
    //     newDo.element.style = "border: 1px solid black";
    // }
    
    handleNewDoInput = (event) => {
        this.setState({ newDo: event.target.value });
    };

    // childFunc = (event) => {
    //     this.setState({
    //         selected: index
    //    });
    // }

    render() {
        //  const borderStyle = { border: '1px black solid'};
        return (
            <div>
                {this.state.doList.map((item, i) => <TodoList  done={item} />)}
                                                         {/* key={i} index={i} */}
{/* <div>{item}</div>)} */}
                <form onSubmit={this.addDo}>

                    <input className="doTextBox" type="text" onChange={this.handleNewDoInput} placeholder="-New Do Here-" value={this.state.newDo} />
                    
                </form>
    
            </div>

        );
    }
}

export default Todo;