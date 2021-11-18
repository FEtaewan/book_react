import logo from './logo.svg';
import './App.css';
import React, { Fragment } from "react";
import MyComponent from "./MyComponent";

function App() {
  const name = '리액트공부'
  return (
      <div className="react">
        {name}<br/>
          //하하<br/>
          /*이런주석은 나옴*/
          {/*리액트 주석*/}
          <MyComponent name="test"></MyComponent>
      </div>
  )
}

export default App;
