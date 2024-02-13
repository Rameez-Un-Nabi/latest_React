// Footer.js
import React from 'react';

const Footer = () => (
  <footer>
    {/* 1st part */}    
  <div style={{width: '100%', height: '100%', position: 'relative'}}>
    
    <div style={{width: 128.43, left: 0, top: 0, position: 'absolute', color: '#495E57', fontSize: 20, fontFamily: 'Karla', fontWeight: '800', wordWrap: 'break-word'}}>Navigation</div>
    
    <div style={{width: 210.86, height: 167, left: 0, top: 47, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Home<br/>About<br/>menu<br/>Reservations<br/>Order Online<br/>Login<br/></div>
    
  </div>

{/* 2nd Part */}

<div style={{width: '100%', height: '100%', position: 'relative' ,left:"300px"}}>
    
    <div style={{width: 100.86, height: 50, left: 0, top: 47, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', }}>Adress<br/>phone number<br/>email<br/></div>

    <div style={{width: 128.43, left: 0, top: 0, position: 'absolute', color: '#495E57', fontSize: 20, 
    fontFamily: 'Karla', fontWeight: '800'}}>Contact</div>

</div>


{/* 3rd Part */}
{/* <br/>phone number<br/>email<br/> */}
  </footer>
);

export default Footer;

