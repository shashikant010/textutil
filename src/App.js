import './App.css';
import React , {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert(
      {msg:message,
      type:type}
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      showalert('mode is dark mode','success');
      document.title='Textutil-darkmode'
    }
    else{
      setmode('light');
      showalert('mode is light mode','success');
      document.title='Textutil-lightmode'
    }
  }
  return (
    <div className="App" style={
      { color:`${mode==='light'?'black':'white'}` ,
       backgroundColor:`${mode==='light'?'white':'#343a40'}`}
     }>
      
<Navbar title="textUtils" mode={mode} togglemode={togglemode}/>

<Alert alert={alert}/>
<Router>
<Routes>
          <Route path="/about" element={<About/>}>
            {/* <About /> */}
          </Route>
          <Route path="/" element={<Textform heading="Enter text below to analyze "mode={mode} alert={showalert}/>}>
          {/* <Textform heading="Enter text below to analyze "mode={mode} alert={showalert}/> */}
            
          </Route>
        </Routes>
        </Router>




</div>

  ) 
}

export default App;
