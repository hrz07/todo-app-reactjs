import React from 'react';
import './FooterStyle.css'

const Footer = () => {

    let date = new Date().getFullYear()
    
    return (
        <div >
            <footer >© All Rights Reserved By Hridoy, {date} </footer>
        </div>
    );
}

export default Footer;
