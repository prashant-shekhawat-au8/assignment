import React from "react";
import "./App.css";
import "./styling/section2.css";
import "./styling/section3.css";
import "./styling/section4.css";
import "./styling/section5.css";
import "./styling/section6.css";
import "./styling/section7.css";
import "./styling/section8.css";
import headphone from "./img/headphone/bitmap.png";
import headphone2x from "./img/headphone/bitmap@2x.png";
import headphone3x from "./img/headphone/bitmap@3x.png";

import headphone_2 from "./img/headph/bitmap.png";
import headphone2x_2 from "./img/headph/bitmap@2x.png";
import headphone3x_2 from "./img/headph/bitmap@3x.png";

import headphone_3 from "./img/male/rectangle.png";
import headphone2x_3 from "./img/male/rectangle@2x.png";
import headphone3x_3 from "./img/male/rectangle@3x.png";

import headphone_4 from "./img/female/rectangle-copy.png";
import headphone2x_4 from "./img/female/rectangle-copy@2x.png";
import headphone3x_4 from "./img/female/rectangle-copy@3x.png";

import {Row, Col,CardBody,CardImg,Spinner,CardLink } from 'reactstrap';

import svg1 from "./img/cards.svg";
import svg2 from "./img/smartphone.svg";
import boy from "./img/boy.jpg"
import girl from "./img/girl.jpg"
import bg from "./img/bg.jpg"
import profile1 from "./img/profile1.jpg"
import profile2 from "./img/profile2.jpg"
import {Link} from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
    };
  }
 
  render() {
    return (
      <div >
        
        <div>
          <button style={{margin:"20px"}}><Link to={"/formvalidation"}>Click here to see form validation</Link></button>
          <button style={{margin:"20px"}}><Link to={"/simplepage"}>Click here to see Simple Page</Link></button>
        </div>
        
        <div class="section1">
          <div class="section1a">
                <div class="omega">Omega</div>
                <div class="three">
                  <a class="three_a1">Demos</a>
                  <a class="three_a">Pages</a>
                  <a class="three_a">Support</a>

                </div>
                <div class="cart">
                  <div class="cartW">Cart</div>
                  <div class="cart_button">
                    <div class="cart_button1">0</div>
                    </div>
                </div>
          </div>
          <div class="section1b">
                <div class="headphone">
                <picture>
                  <source media="(min-width:650px)" srcset={headphone3x}/>
                  <source media={"(min-width:465px)"} srcset={headphone2x}/>
                  <img src={headphone} alt="Flowers" width="352" height="570"/>
                </picture>
                 
                </div>
                <div> 
                  <h4 class="enjoy">Enjoy every single<br/> beat on headphone! </h4>
                  <p class="para">For iPhone, iPad and Android users be sure your products<br/> firmware updated through the Boss connect App </p>
                  <div class="price">
                    <div class="numeric">
                      <div class="doller_price">$299</div>
                      <div class="save">Save 30% today</div>
                      <br/>
          
                    </div>
                    <div class="para original">original price $399</div>
                  </div>
                  <div class="two_buttons">
                    <div class="increment">
                      <div class="one">1</div>
                      <div class="plus_minus">
                        <div>+</div>
                        <div>-</div>
                      </div>
                    </div>
                    <div class="addToCart">Add to Cart</div>

                  </div>
                </div>
          </div>
        </div>
        <div class="section2">
          <div class="content">
          <h4 class="enjoy1">Get noise free  <br/> sound EveryTime </h4>
          <p class="para1">Create custom landing page with Omega  that converts<br/> more visitors than any websites.With lots of unique blocks<br/>you can eaisly build a page without coding </p>
          <div class="svg1">
            <div class="svg1_here">
            <img src={svg1} class="cards1"/>
            </div>
            <div class="svg1_here1">
            <div class="fifty">50+ Unique design blocks</div>
              <div  class="third_div">with carefully coded</div>
            </div>
          </div>
          <div class="svg1">
          <div class="svg1_here" style={{backgroundColor:"rgba(84, 84, 212, 0.1)"}}>
            <img src={svg2} class="cards1"/>
            </div>
            <div class="svg1_here1">
              <div class="fifty">Mobile first device</div>
              <div class="third_div">onevery devices</div>
            </div>
          </div>
          </div>
          <div >
          <picture class="second_">
                  <source media="(min-width:650px)" srcset={headphone3x_2}/>
                  <source media={"(min-width:465px)"} srcset={headphone2x_2}/>
                  <img src={headphone_2} alt="Flowers" width="510" height="450"/>
                </picture>
           
          </div>
        </div>
        <div class="section3">
          <div class="first_section3">It's everything <br/>you'll ever need</div>
          <div class="card_box">
            
        


            <div class="svg1_1">
              <div class="svg1_here_1">
              <img src={svg1} class="cards1_1"/>
              </div>
              <div class="svg1_here1_1" style={{color:"black",fontWeight:"bold"}}>50+ Unique Design</div> 
            </div>
            <div class="svg1_1">
              <div class="svg1_here_1" >
              <img src={svg2} class="cards1_1"/>
              </div>
              <div class="svg1_here1_1 multi"  style={{color:"black",fontWeight:"bold"}}>Multiple Layout</div> 
            </div>
            <div class="svg1_1">
              <div class="svg1_here_1">
              <img src={svg2} class="cards1_1"/>
              </div>
              <div class="svg1_here1_1" style={{color:"black",fontWeight:"bold"}}>Mobile First Design</div> 
            </div>
            </div>
            <div class="card_box second_box">
                    <div class="svg1_1">
                <div class="svg1_here_1">
                <img src={svg2} class="cards1_1"/>
                </div>
                <div class="svg1_here1_1" style={{color:"black",fontWeight:"bold"}}>Full Responsive</div> 
              </div>
                    <div class="svg1_1">
                <div class="svg1_here_1">
                <img src={svg2} class="cards1_1"/>
                </div>
                <div class="svg1_here1_1" style={{color:"black",fontWeight:"bold"}}>Bottstrap Frame Work</div> 
              </div>
            </div>
            <div class="card_box second_box">
                    <div class="svg1_1">
                <div class="svg1_here_1">
                <img src={svg2} class="cards1_1"/>
                </div>
                <div class="svg1_here1_1" style={{color:"black",fontWeight:"bold"}}>Humanity support</div> 
              </div>
                    <div class="svg1_1">
                <div class="svg1_here_1">
                <img src={svg2} class="cards1_1"/>
                </div>
                <div class="svg1_here1_1" style={{color:"black",fontWeight:"bold"}}>Lifetime Update</div> 
              </div>
                    <div class="svg1_1">
                <div class="svg1_here_1">
                <img src={svg2} class="cards1_1"/>
                </div>
                <div class="svg1_here1_1" style={{color:"black",fontWeight:"bold"}}>Rich Document</div> 
              </div>
            </div>
            
          </div>
         
        <div class="section4"> 
          <div>
            <div class="music">Enter Your Music</div>
          </div>
          <div class="para4">
            <p style={{marginBottom:"0px"}}> create custom landing page with Omegle that converts more visitors <br/> than any website. With lots of unique block u build a <br/>page without coding</p>
          </div>
          <div class="main_gb">
            <div class="boy">
            <picture >
                  <source media="(min-width:650px)" srcset={headphone3x_3}/>
                  <source media={"(min-width:465px)"} srcset={headphone2x_3}/>
                  <img src={headphone_3} alt="Flowers" width="315" height="464"/>
                </picture>
          </div>
          <div  class="girl">
          <picture >
                  <source media="(min-width:650px)" srcset={headphone3x_4}/>
                  <source media={"(min-width:465px)"} srcset={headphone2x_4}/>
                  <img src={headphone_4} alt="Flowers" width="657" height="464"/>
                </picture>
          </div>
          </div>



        </div>
        <div class="section5"> 
        <img src={bg} class="bg"/>
        
        <div class="main_content">
        <div class="h1_"><h1 >2K people are using <br/> using this headset</h1>
        </div>
        <div><p  class="para6"> create custom landing page with Omegle that converts <br/> more visitors than any website. With lots of unique <br/> block u build a  without coding</p></div>
        <div class="try">Try it now </div>
        </div>
        </div>
        <div class="section6">
          <div class="music">What users say</div>
          <div><p class="para8"> create custom landing page with Omegle that converts more visitors <br/> than any website.</p></div>
          <div class="contain">
          <div class="container2">
          <div class="omg">OMG! i cannot believe that i have got a brand<br/>new loading page
            after getiing Omega. <br/> super easy to edit and publish</div>
            <div class="profile_container">
              <div >
                <img src={profile1}/>
              </div>
              <div class="pro">
              <div class="pro_name"><h3 style={{margin:"0px"}}>Jonathon Tylor</h3></div>
              <div class="pro_named">CEO at creativex</div>
              </div>
            </div>
          </div >
          <div class="container2">
            <div class="omg">OMG! i cannot believe that i have got a brand<br/>new loading page
            after getiing Omega. <br/> super easy to edit and publish</div>
            <div class="profile_container">
              <div >
                <img src={profile2}/>
              </div>
              <div class="pro">
              <div class="pro_name"><h3 style={{margin:"0px"}}>Marie Stainley</h3></div>
              <div class="pro_named">Digital Marketer, Writer </div>
              </div>
            </div>
          </div>
          </div>

        </div>

        <div class="section7">
          <div class="beat">Enjoy every beat. <br/>Get a new headphone</div>
          <div class="try buy"> Buy Now</div>
        </div>

        <div class="section8">
          <div class="om"><h1 >Omega </h1></div>
          <div class="section8 mid sep"> 
            <div class="sp">Support</div>
            <div class="sp">Privacy</div>
            <div class="sp">Terms and Conditions</div>
          </div>
          <div class="end mid">
            @2020 UX Theme,All Rights Reserved
          </div>
        </div>
         
        </div>

    );
  }
}

export default App;