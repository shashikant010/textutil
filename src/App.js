import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <div className="App">
     
<Navbar title="textUtils"/>
<div className="container">
<Textform heading="Enter text below to analyze"/>
{/* <About/> */}
</div>
    </div>
  );
}

export default App;
