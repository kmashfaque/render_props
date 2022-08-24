
import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
// import User from './components/User';


function App() {
  return (
    <div className="App">
    
    
     
      <Counter render={(counter,increamentCount)=>(
      <ClickCounter counter={counter}increamentCount={increamentCount}/>
      )}/>

      <Counter render={(counter,increamentCount)=>(
      <HoverCounter counter={counter}increamentCount={increamentCount}/>
      )}/>
      
    </div>
  );
}

export default App;
