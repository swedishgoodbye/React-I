import React from 'react';
import Todo from './components/Todo.js';
import './style/AppStyle.css'


const App = () => (
  <div>
    <h2 className="ToDo__Head">Todo App</h2>

    <div className="TheList__Div">
    <Todo  />
    </div>
  </div>
);

export default App;
