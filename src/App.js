import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Room from './Room';

function App() {
    //const state = useState(true);
    //console.log("State=",state);
    const[Count, setCount] =useState(1);

//    function updateLit(){
//        console.log("button clicked")
//    }
    const [isMorning, setMorning]=useState(true);

  return (
    <div className='box'>

    <h1>Have a good {isMorning?'Morning':'Night'}</h1>
      <Room Counter={Count}/>
      <br/>
      <button onClick={()=> setCount(Count+2)}>update state</button>
      <button onClick={()=>setMorning(!isMorning)}>update day</button>
    </div>
  );
}

export default App;






