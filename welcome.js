//welcome.js

function Welcome(){

      return
      <div>
          <h1>This is function component</h1>
      </div>
}


export default Welcome; 

//Bank.js
import React from 'react';



class Bank extends React.Component {

render(){
return (
<div>
<h1>This is class Component</h1>
    <h1>This is class Component</h1>
    </div>
    )
}

}

//App.js

import logo from './logo.svg';
import './App.css';
import Bank from './Bank.js';
import Welcome from './Welcome.js'

function App() {
  return (
    <div className="App">
      <h1>welcome</h1>
      <Welcome/>
      <Bank />
    
    </div>);
}

export default App; 


export default Bank; 