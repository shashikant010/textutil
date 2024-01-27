import './App.css';
import React , {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

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
    }
    else{
      setmode('light');
      showalert('mode is light mode','success');
    }
  }
  return (
    <div className="App" style={
      { color:`${mode==='light'?'black':'white'}` ,
       backgroundColor:`${mode==='light'?'white':'#343a40'}`}
     }>
      
<Navbar title="textUtils" mode={mode} togglemode={togglemode}/>

<Alert alert={alert}/>


<div className="container" >
<Textform heading="Enter text below to analyze "mode={mode} alert={alert}/>
{/* <About/> */}
</div>

    </div>
  );
}

export default App;
