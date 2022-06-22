
import './App.css';
import Menubar from './components/Menu';
import Number from './components/reser';

import Reser from './components/zuragtext';

function App() {
  return (
    <div className="App">
    <div className='ap'>
    <Menubar/>
   
    <Reser text="Gusto"/>
    <Number num="Reservations:(887)654-3210"/>
    </div>

       <div className='our'>
      <h1>Our Specials</h1>
      <div className='zuraas'></div>    
       </div> 
     
    </div>
 

  );
}

export default App;
