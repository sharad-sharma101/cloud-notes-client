import React from 'react'
import './About.css'

const About = () => { 
    return (
        <div>
            <h1>This Cloud note network  </h1>
            <br />
            <br />
            <p>Use for :</p>
            <ul>
                <li>daily todo list</li>
                <li>important work note</li>
                <li>store note on cloud</li>
            </ul>
            <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className='footer' >
                <div>
                    <p> <b>Developer</b> : Sharad Sharma</p>
                </div>
                <div className='conn'>
                    <div> <b> Contect me :</b></div>
                    <ul>
                        <li>
                        <a href="https://www.linkedin.com/in/sharad-sharma-575226192/"><i className="fa-brands fa-linkedin"></i> Linkdin</a>        
                        </li>
                        <li>
                        <a href=""><i className="fa-regular fa-envelope"></i> gmail</a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i> instagram</a>        
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About