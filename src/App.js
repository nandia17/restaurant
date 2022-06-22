
import './App.css';
import Menubar from './components/Menu';
import Ner from './components/ner';
import Orts from './components/orts';
import Number from './components/reser';
import Image from './components/tomzurag';
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
       <div className='hool-box'>
          <div className='box'>
              <div className='bo'>
                <Ner ner="Lorem ipsum dolor"/> 
                <Image src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?cs=srgb&dl=pexels-terje-sollie-299348.jpg&fm=jpg"/>
                <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan. "/>
              </div>
              <div className='bo'>
                <Ner ner="Lorem ipsum dolor"/> 
                <Image src="https://images.pexels.com/photos/765082/pexels-photo-765082.jpeg?cs=srgb&dl=pexels-yigithan-bal-765082.jpg&fm=jpg"/>
                <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan. "/>
              </div>
              <div className='bo'>
                <Ner ner="Lorem ipsum dolor"/> 
                <Image src="https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg?cs=srgb&dl=pexels-valeria-boltneva-7474372.jpg&fm=jpg"/>
                <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan. "/>
              </div>
          </div>
           
       </div>
     
    </div>
 

  );
}

export default App;
