import React, {Fragment} from 'react'
import logo from './assets/JuicyFruitLogo.png'
const Nav = () => {
    return (
        <Fragment>
        <div className="main-1">
            <div className="nav">
        <a href="/"><img src={logo} alt="JuicyPost logo" /></a>
        <br />
        <h1>Boards</h1>
        <a href="/pets"><h3>Pets</h3></a>
        <a href="/anime"><h3>Anime</h3></a>
        <a href="/gaming"><h3>Gaming</h3></a>
        <a href="/random"><h3>Random</h3></a>
        <a href="/gardening"><h3>Gardening</h3></a>
        <a href="/programing"><h3>Programing</h3></a>
        <a href="/current"><h3>Current Events</h3></a>
        <a href="/faq"><h1>Faq</h1></a>
        <a href="/rules"><h2>Rules</h2></a>
        <a href="/contact"><h2>Contact me</h2></a>
        <a href="/generator"><h2>Image Link Generator</h2></a>
        <h1>DecaHex</h1>
        </div>
      </div>

      <div className="mobile-nav">
      <a href="/"><img src={logo} alt="JuicyPost logo" className="mobile-nav-image" /></a>
        <input type="checkbox" className="toggler" />
        <div className="hamburger"><div></div></div>
        <div id="myLinks">
        <a href="/pets"><h3>Pets</h3></a>
        <a href="/anime"><h3>Anime</h3></a>
        <a href="/gaming"><h3>Gaming</h3></a>
        <a href="/random"><h3>Random</h3></a>
        <a href="/gardening"><h3>Gardening</h3></a>
        <a href="/programing"><h3>Programing</h3></a>
        <a href="/current"><h3>Current Events</h3></a>
        <a href="/faq"><h1>Faq</h1></a>
        <a href="/rules"><h2>Rules</h2></a>
        <a href="/contact"><h2>Contact me</h2></a>
        <a href="/generator"><h2>Image Link Generator</h2></a>
        </div>
      </div>
      </Fragment>
    )
}


export default Nav;