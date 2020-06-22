import React from 'react'
import Nav from '../Nav'
const Faq = () => {
    return (
        <div className="main">
            <Nav />
            <div className="main-2">
            <h1 className="text-center">Faq</h1>
            <div className="content">
            <h1>Faq</h1>
            <h1>Frequently Asked Questions</h1>
            <h3>What technologies do you use?</h3>
            <p>To make this site I used ReactJS, Redux, MongoDB, Node and Express</p>
            <h3>Can i have the code?</h3>
            <p>Yes! the code is found on Github</p>
            <a href="https://github.com/chocoguy/JuicyPost">Code</a>
            <h3>Why did you make this?</h3>
            <p>I made this to get better at coding i like a good challenge!</p>
            <h3>Do you gather personal information?</h3>
            <p>No! I believe in online privacy so no cookie will ever be set by this site</p>
            <h3>Can you add (Feature)</h3>
            <p>Yes! i could potentially add that feature all you have to do is contact me!</p>
            </div>
            </div>
        </div>
    )
}


export default Faq;