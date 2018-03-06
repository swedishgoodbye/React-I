import React from 'react';
import TheList from './List.js';
import './style/AppStyle.css'


const App = () => (
  <div>
    <h2 className="ToDo__Head">Todo App</h2>

    <div className="TheList__Div">
    <TheList  />
    </div>
  </div>
);

export default App;
