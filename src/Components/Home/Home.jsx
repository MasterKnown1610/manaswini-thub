import React from 'react';
import './Home.css';
import mobileimg from '../../assets/image.svg'
import logo from '../../assets/logo.svg';

const home = () => {
  return (
    <div className='home-container'>
        <div className="Navbar">
            <div className="logo">
                <img src={logo} alt="" />

            </div>
            <div className="Nav-lists">
                <div className="lists">
                
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                

                </div>
                <div className="button">
                    <div className="but-call">
                        <p>Request Call</p>
                    </div>

                </div>

            </div>
           

        </div>
        <div className="sub-container">
            <div className="home-text">
                <div className="solution">
                    <h5>The Finance Solution</h5>

                </div>
                <div className="simplify">
                    <h2 style={{marginBottom:'-5px'}}>Simplify Your</h2>
                    <h2>Money</h2>
                    <h2 style={{marginTop:'-20px'}}>Growth</h2>

                </div>
                <div className="lorem">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.</p>

                </div>
                <div className="details">
                    <p>See More Details</p>

                </div>

            </div>
            <div className="image">
              <img src={mobileimg} alt="img" />

            </div>
        </div>

      
    </div>
  )
}

export default home
