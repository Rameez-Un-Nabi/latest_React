
import './App.css';
import Logoimage from './Logo.svg';
import rest from './rest.jpg';
import { Link } from 'react-router-dom';


function App() {


  const testimonialsContainerStyle = {
    position: 'relative',
    marginTop: '50px',
    width: '800px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gridArea: 'testimonials',
  };

  const testimonialStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '200px',
  };

  const getRandomText = () => {
    const texts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];

    return texts[Math.floor(Math.random() * texts.length)];
  };
  return (
  <>
{/* ========Header====== */}

<header>

{/* 1. Logo */}
<img src={Logoimage} alt="logo" ></img>


{/* 2. Nav Bar */}
<nav>

  <ul>
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li>Reservations</li>
      <li>Order Online</li>
      <li>Login</li>
  </ul>


  {/* <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/menu">Menu</Link>
  <Link to="/reservations">Reservations</Link>
  <Link to="/order_online">Order Online</Link>
  <Link to="/login">Login</Link> */}

</nav>

</header>
  


{/* ======Main One========= */}
<main id='hero' >


{/* 1. Text Block */}
  <div id= 'Text Bloack in hero'>

  <h1 height='100%' width="100%">Little Lemon</h1>

  <p style={{width: '300px'}} >We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

</div>




      {/*2. Pic  */}
<img src={rest} alt="rest" ></img>
    
</main>



{/* ======Main Two========= */}
<main id="Food_Items" style={{display:'flex',width: '100%', height: '100%', position: 'relative'}}>

  {/* 1st Card */}
  <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 264.67, height: 253.74, left: 0, top: 185.26, position: 'absolute', background: '#EDEFEE'}} />
    <img style={{width: 264.67, height: 185.26, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 16, borderTopRightRadius: 16, border: '1px black solid'}} src="https://via.placeholder.com/265x185" />
    <div style={{width: 163.59, height: 2, left: 25.01, top: 204.57, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Markazi Text', fontWeight: '500', lineHeight: 21.60, wordWrap: 'break-word'}}>Greek salad</div>
    <div style={{width: 216.74, height: 120.29, left: 25.01, top: 252.86, position: 'absolute', color: '#495E57', fontSize: 16, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </div>
    <div style={{width: 59.39, height: 16.68, left: 194.85, top: 205.45, position: 'absolute', color: '#EE9972', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>$12.99</div>
    <div style={{width: 147.96, height: 28.10, left: 25.01, top: 390.71, position: 'absolute'}}>
        <div style={{width: 142.75, height: 28.10, left: 0, top: 0, position: 'absolute', color: '#333333', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>Order a delivery</div>
        <div style={{width: 16.67, height: 10.54, left: 131.29, top: 3.51, position: 'absolute'}}>
            <div style={{width: 14.17, height: 10.54, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
            <div style={{width: 4.17, height: 1.51, left: 2.50, top: 0.75, position: 'absolute', background: 'black'}}></div>
            <div style={{width: 5, height: 4.52, left: 11.67, top: 6.02, position: 'absolute', background: 'black'}}></div>
        </div>
    </div>
</div>



  {/* 2nd Card */}
  <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 264.67, height: 253.74, left: 0, top: 185.26, position: 'absolute', background: '#EDEFEE'}} />
    <img style={{width: 264.67, height: 185.26, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 16, borderTopRightRadius: 16, border: '1px black solid'}} src="https://via.placeholder.com/265x185" />
    <div style={{width: 264.67, height: 185.26, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 16, borderTopRightRadius: 16, border: '1px black solid'}} />
    <div style={{width: 163.59, height: 25.46, left: 25.01, top: 204.57, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Markazi Text', fontWeight: '500', lineHeight: 21.60, wordWrap: 'break-word'}}>Bruchetta</div>
    <div style={{width: 216.74, height: 120.29, left: 25.01, top: 252.86, position: 'absolute', color: '#495E57', fontSize: 16, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </div>
    <div style={{width: 59.39, height: 16.68, left: 194.85, top: 205.45, position: 'absolute', color: '#EE9972', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>$ 5.99</div>
    <div style={{width: 147.96, height: 28.10, left: 25.01, top: 390.71, position: 'absolute'}}>
        <div style={{width: 142.75, height: 28.10, left: 0, top: 0, position: 'absolute', color: '#333333', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>Order a delivery</div>
        <div style={{width: 16.67, height: 10.54, left: 131.29, top: 3.51, position: 'absolute'}}>
            <div style={{width: 14.17, height: 10.54, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
            <div style={{width: 4.17, height: 1.51, left: 2.50, top: 0.75, position: 'absolute', background: 'black'}}></div>
            <div style={{width: 5, height: 4.52, left: 11.67, top: 6.02, position: 'absolute', background: 'black'}}></div>
        </div>
    </div>
</div>


  {/* 3rd Card */}
  <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 264.67, height: 253.74, left: 0, top: 185.26, position: 'absolute', background: '#EDEFEE'}} />
    <img style={{width: 264.67, height: 185.26, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 16, borderTopRightRadius: 16, border: '1px black solid'}} src="https://via.placeholder.com/265x185" />
    
    <div style={{width: 216.74, height: 120.29, left: 25.01, top: 252.86, position: 'absolute', color: '#495E57', fontSize: 16, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</div>
    <div style={{width: 59.39, height: 16.68, left: 194.85, top: 205.45, position: 'absolute', color: '#EE9972', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>$ 5.00</div>
    <div style={{width: 147.96, height: 28.10, left: 25.01, top: 390.71, position: 'absolute'}}>
        <div style={{width: 142.75, height: 28.10, left: 0, top: 0, position: 'absolute', color: '#333333', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>Order a delivery</div>
        <div style={{width: 16.67, height: 10.54, left: 131.29, top: 3.51, position: 'absolute'}}>
            <div style={{width: 14.17, height: 10.54, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
            <div style={{width: 4.17, height: 1.51, left: 2.50, top: 0.75, position: 'absolute', background: 'black'}}></div>
            <div style={{width: 5, height: 4.52, left: 11.67, top: 6.02, position: 'absolute', background: 'black'}}></div>
        </div>
    </div>
</div>







</main>


{/* ======Main Three ======= */}
<main id ="Testimonals">



<div style={testimonialsContainerStyle}>
      {/* 1st Testimonial */}
      <div style={testimonialStyle}>
        <div className="rating">5 Stars</div>
        <div className="name">John Doe</div>
        <div className="review-text">{getRandomText()}</div>
      </div>

      {/* 2nd Testimonial */}
      <div style={testimonialStyle}>
        <div className="rating">4 Stars</div>
        <div className="name">Jane Doe</div>
        <div className="review-text">{getRandomText()}</div>
      </div>

      {/* 3rd Testimonial */}
      <div style={testimonialStyle}>
        <div className="rating">5 Stars</div>
        <div className="name">Bob Smith</div>
        <div className="review-text">{getRandomText()}</div>
      </div>
    </div>



</main>




<footer style={{}}>

  {/* 1st part */}    
  <div style={{width: '100%', height: '100%', position: 'relative'}}>
    
    <div style={{width: 128.43, left: 0, top: 0, position: 'absolute', color: '#495E57', fontSize: 20, fontFamily: 'Karla', fontWeight: '800', wordWrap: 'break-word'}}>Navigation</div>
    
    <div style={{width: 210.86, height: 167, left: 0, top: 47, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Home<br/>About<br/>menu<br/>Reservations<br/>Order Online<br/>Login<br/></div>
    
  </div>

{/* 2nd Part */}

<div style={{width: '100%', height: '100%', position: 'relative'}}>
    
    <div style={{width: 100.86, height: 50, left: 0, top: 47, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', }}>Adress<br/>phone number<br/>email<br/></div>

    <div style={{width: 128.43, left: 0, top: 0, position: 'absolute', color: '#495E57', fontSize: 20, 
    fontFamily: 'Karla', fontWeight: '800'}}>Contact</div>

</div>


{/* 3rd Part */}
{/* <br/>phone number<br/>email<br/> */}





</footer>




  </>
  );
}

export default App;
