
import './App.css';
import Food from './components/food';
import Menubar from './components/Menu';
import Ner from './components/ner';
import Orts from './components/orts';
import Number from './components/reser';
import StoImage from './components/stoimage';
import Story from './components/story';
import Image from './components/tomzurag';
import Type from './components/TYPE';
import Une from './components/une';
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
    <div className='story-box'>
        <div className='sto-img'>
            <StoImage src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"/>
        </div>
        <div className='sto-text'>
        <div className='ca'>
            <Story story="Our story"/>
            <div className='zuraas'></div> 
            <Story sto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan."/>
            <br/>
            <br/>
            <Story sto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan."/>
            </div>
        </div>
    </div>

    <div className='menu'>
    <div className='bbb'>
        <Type type="BREAKFAST & STARTERS"/>
        <div className='zuraasa'></div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Tortellini Skewers"/>
              <Une une="$9"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Fried Ravioli"/>
              <Une une="$7"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Wild Mushroom Arancini"/>
              <Une une="$9"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Mozzarella Sticks"/>
              <Une une="$10"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
      
        </div>
    <div className='bbb'>
        <Type type="MAIN COURSE"/>
        <div className='zuraasa'></div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Roast Stuffed Chicken"/>
              <Une une="$18"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Chicken & Mushroom Pasta"/>
              <Une une="$20"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Beef Lasagne"/>
              <Une une="$14"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Chicken Goujons"/>
              <Une une="$19"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        </div>
    <div className='bbb'>
        <Type type="DINNER"/>
        <div className='zuraasa'></div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Sesame-Ginger Beef"/>
              <Une une="$15"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Crispy Fried Chicken"/>
              <Une une="$17"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Mongolian Shrimp & Broccoli"/>
              <Une une="$18"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Spicy Coconut Salmon"/>
              <Une une="$20"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        </div>
    <div className='bbb'>
        <Type type="DESSERTS"/>
        <div className='zuraasa'></div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Chocolate Mud Cake"/>
              <Une une="$11"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Bourbon-Pecan Tart"/>
              <Une une="$14"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Texas Sheet Cake"/>
              <Une une="$15"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        <div className='une-box'>
            <div className='box-1'>
              <Food food="Vanilla Cheesecake"/>
              <Une une="$18"/>
            </div>
            <div className='box-2'>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."/>
            </div>
        </div>
        </div>
    </div>

    <div className='zurag'>
    <div className='zur'>
    <Image src='https://images.pexels.com/photos/5339078/pexels-photo-5339078.jpeg?cs=srgb&dl=pexels-roman-odintsov-5339078.jpg&fm=jpg'/>
    </div>
    <div className='zur'>
    <Image src='https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?cs=srgb&dl=pexels-iina-luoto-1211887.jpg&fm=jpg'/>
    </div>
    <div className='zur'>
    <Image src='https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?cs=srgb&dl=pexels-anthony-leong-2092906.jpg&fm=jpg'/>
    </div>

    <div className='zur'>
    <Image src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?cs=srgb&dl=pexels-william-choquette-2641886.jpg&fm=jpg'/>
    </div>
   
    
   
   
    </div>

    <div className='chef'>
        <div className='che'>
            <div className='chef-text'>
              <div className='ou'>
              <Ner ner="Our Chef"/>
              <div className='zuraas'></div>
              </div>
            
              
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh."/>
              <br/>
              <br/>
              <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh."/>
            </div>
            <div className='chef-zurag'>
                <Image src="https://images.pexels.com/photos/4252146/pexels-photo-4252146.jpeg?cs=srgb&dl=pexels-cottonbro-4252146.jpg&fm=jpg"/>
            </div>
        </div>
    </div>

<div className='footer'>
    <div className='foot'>
    <div className='ff'>
        <div className='f-box'>
            <div className='fo-box'>
            <Ner ner="RESERVATIONS"/>
           
            </div>
            <div className='call'>
            <Ner ner="Please call"/>
            <Ner ner="(887)654-3210"/>
            </div>
        </div>
        <div className='f-box'>
            <div className='fo-box'>
            <Ner ner="RESERVATIONS"/>
           
            </div>
            <div className='call'>
            <Ner ner="Please call"/>
            <Ner ner="(887)654-3210"/>
            </div>
        </div>
        <div className='f-box'>
            <div className='fo-box'>
            <Ner ner="RESERVATIONS"/>
            
            </div>
            <div className='call'>
            <Ner ner="Please call"/>
            <Ner ner="(887)654-3210"/>
            </div>
        </div>
        </div>
        <div className='f-cont'>
        <div className='ou'>
            <Ner ner="SEND US A MESSAGE"/>
            <div className='zuraas'></div>
        </div>
        <div className='input-text'>
          
        </div>

        </div>
    </div>
</div>    

    
    
    </div>


  );
}

export default App;


// <div className='f-input'>
// //           <div className='f-c'>
// //           <label for="email">Enter your email:</label>
// //           <input type="email" id="email" name="email"></input>
// //           <label for="fname">First name:</label>
// // <input type="text" id="fname" name="fname"></input>
// //           </div>
// //           <div className='f-inp'>
// //           <textarea rows="4" cols="50" name="comment" form="usrform">
// //           Enter text here...</textarea>
// //           </div>
// //           <div className='button'>
// //           <input type="submit"></input>
// //           </div>
// //       </div>