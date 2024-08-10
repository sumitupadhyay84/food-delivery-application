import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-left-content'>
                <img src={assets.logo} alt='' />
                <p>Hi foodies,welcome to food wali shop what you eat today? we have contain best and excellent platter for you as per your demand so take it with heartfully. </p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                </div>
            </div>
            <div className='footer-center-content'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-right-content'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9768456899</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>copyright 2024 Made by Sumit - All Right Reserved.</p>
    </div>
  )
}

export default Footer 
