import React, { Component } from 'react'
import "./styling/simple.css"
import svg4 from "./img/shape.svg"

export default class Simple_page extends Component {
    render() {
        return (
            <div>
                <div class="cointainer">
                    <div class="sub_cointainer1">
                        <h1>Omega</h1>
                        </div>
                    <div class="sub_cointainer2">
                        <a>Demos</a>
                        <a>Pages</a>
                        <a>Support</a>
                        <button class="button2">Get Started</button>
                        </div>
                    
                </div>
                <div class="cointainer2">
                    <div class="like">
                       <img src={svg4}/>
                    </div>
                    <div><h1>Thankyou</h1></div>
                    <div><p>Create custom landing Pages with omegas that converts  <br/> more visitor that any website </p></div>
                    <div>
                        <button class="button3">Go Back Home</button>
                    </div>

                </div>
                <div class="cointainer3">
                    <div>
                        <h1>Omega</h1>

                    </div>
                    <div>
                        <h3>About</h3>
                        <p>Our Mission</p>
                        <p>Our Story</p>
                        <p>Our Team Member</p>
                    </div>
                    <div>
                        
                        <h3>Learn</h3>
                        <p>Tutorial</p>
                        <p>How it works</p>
                        <p>F.A.Q</p>
                    </div>
                    <div>
                        <h3>Stories</h3>
                        
                        <p>Blog</p>
                        <p>Tech stories</p>
                    </div>
                    <div>
                        <h3>Hire</h3>
                        <p>Hire</p>
                        <p>Carrier </p>
                        <p>Frelancer</p>
                    </div>
                </div>
            </div>
        )
    }
}
