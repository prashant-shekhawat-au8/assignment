import React from "react";
import "./App.css";
import "./styling/section2.css";
import "./styling/section3.css";
import "./styling/section4.css";
import "./styling/section5.css";
import "./styling/section6.css";
import "./styling/section7.css";
import "./styling/section8.css";
import headphone from "./img/bitmap.jpg";
import headphone1 from "./img/head/bitmap@3x.jpg";
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
      <div>
        
        <div>
          <button style={{margin:"20px"}}><Link to={"/formvalidation"}>Click here to see form validation</Link></button>
          <button style={{margin:"20px"}}><Link to={"/simplepage"}>Click here to see Simple Page</Link></button>
        </div>
        <div class="section1">
          <div class="section1a">
                <div class="omega">Omega</div>
                <div class="three">
                  <a class="three_a">Demos</a>
                  <a class="three_a">Pages</a>
                  <a class="three_a">Support</a>

                </div>
                <div class="cart">
                  <span>Cart</span>
                  <button class="cart_button">0 </button>
                </div>
          </div>
          <div class="section1b">
                <div class="headphone">
                  <img src={headphone} alt="not found" width="352" height="570"/>
                </div>
                <div> 
                  <h4 class="enjoy">Enjoy every single<br/> beat of Headphone! </h4>
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
                    <div class="increment">1</div>
                    <div class="addToCart">Add to Cart</div>

                  </div>
                </div>
          </div>
        </div>
        <div class="section2">
          <div class="content">
          <h4 class="enjoy1">Get noise free  <br/> sound EveryTime </h4>
          <p class="para1">Create custom landing page with Omega  that converts<br/> more visitors than any websites.With lots of unique blocks<br/>You can eaisly build a page without coding </p>
          <div class="svg1">
            <div class="svg1_here">
            <img src={svg1} class="cards"/>
            </div>
            <div>
            <h3>50+ Un ique design blocks</h3>
              <div  class="third_div">with carefully coded</div>
            </div>
          </div>
          <div class="svg2">
          <div class="svg2_here">
            <img src={svg2} class="cards"/>
            </div>
            <div>
              <h3>Mobile first device</h3>
              <div class="third_div">onevery devices</div>
            </div>
          </div>
          </div>
          <div >
            <img src={headphone1} alt="not found" width="352" height="570"/>
           
          </div>
        </div>
        <div class="section3">
          <div class="first_section3">It's every thing <br/>you will ever need</div>
          <div class="card_box">
            <div class="card_svg3">
              <div class="svg_wrapper">
              <img src={svg1} class="cards"/>
              </div>
              <div class="h3">Mobile updates</div> 
            </div>
            <div class="card_svg3">
              <div class="svg_wrapper">
              <img src={svg2} class="cards"/>
              </div>
              <div class="h3">50+ unique design block</div> 
            </div>
            <div class="card_svg3">
              <div class="svg_wrapper">
              <img src={svg2} class="cards"/>
              </div>
              <div class="h3">50+ unique design block</div> 
            </div>
            </div>
            <div class="card_box second_box">
                    <div class="card_svg3">
                <div class="svg_wrapper">
                <img src={svg1} class="cards"/>
                </div>
                <div class="h3">Mobile Updates</div> 
              </div>
                    <div class="card_svg3">
                <div class="svg_wrapper">
                <img src={svg2} class="cards"/>
                </div>
                <div class="h3">50+ unique design block</div> 
              </div>
            </div>
            <div class="card_box second_box">
                    <div class="card_svg3">
                <div class="svg_wrapper">
                <img src={svg2} class="cards"/>
                </div>
                <div class="h3">50+ unique design block</div> 
              </div>
                    <div class="card_svg3">
                <div class="svg_wrapper">
                <img src={svg2} class="cards"/>
                </div>
                <div class="h3">50+ unique design block</div> 
              </div>
                    <div class="card_svg3">
                <div class="svg_wrapper">
                <img src={svg2} class="cards"/>
                </div>
                <div class="h3">50+ unique design block</div> 
              </div>
            </div>
            
          </div>
         
        <div class="section4"> 
          <div>
            <h1>Enter Your Music</h1>
          </div>
          <div>
            <p class="para1"> create custom landing page with Omegle that converts more visitors <br/> than any website. With lots of unique block u build a <br/> without coding</p>
          </div>
          <div>
          <img src={boy} class="boy"/>
          <img src={girl} class="girl"/>
          </div>



        </div>
        <div class="section5"> 
        <img src={bg} class="bg"/>
        
        <div class="main_content">
        <div class="h1_"><h1 >2K people are using <br/> using this headset</h1>
        </div>
        <div><p  class="p_"> create custom landing page with Omegle that converts more visitors <br/> than any website. With lots of unique block u build a <br/> without coding</p></div>
        <div class="try">Try it now </div>
        </div>
        </div>
        <div class="section6">
          <div><h1>What users say</h1></div>
          <div><p class="para1"> create custom landing page with Omegle that converts more visitors <br/> than any website.</p></div>
          <div class="contain">
          <div class="container2">
          <div>OMG! i cannot believe that i have got a brand<br/>new loading page
            after getiing Omega. <br/> super easy to edit and publish</div>
            <div class="profile_container">
              <div >
                <img src={profile1}/>
              </div>
              <div>
              <div ><h3 style={{margin:"0px"}}>Jonathon Tylor</h3></div>
              <div>CEO at creativex</div>
              </div>
            </div>
          </div >
          <div class="container2">
            <div>OMG! i cannot believe that i have got a brand<br/>new loading page
            after getiing Omega. <br/> super easy to edit and publish</div>
            <div class="profile_container">
              <div >
                <img src={profile2}/>
              </div>
              <div>
              <div ><h3 style={{margin:"0px"}}>Marie Stainley</h3></div>
              <div>Digital Marketer, Writer </div>
              </div>
            </div>
          </div>
          </div>

        </div>

        <div class="section7">
          <div><h1 class="h1_">Enjoy every beat. <br/>Get a new headphone</h1></div>
          <div class="try buy"> Buy Now</div>
        </div>

        <div class="section8">
          <div><h1 >Omega </h1></div>
          <div class="section8 mid"> 
            <div>Support</div>
            <div>Privacy</div>
            <div>Terms and Conditions</div>
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