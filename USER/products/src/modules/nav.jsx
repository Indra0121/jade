import React from 'react'
import userimg from './../imgs/usericon.png'
import cartimg from './../imgs/ag.png'

function NAV() {
  return (
    <nav>
      <ul className="links">
        <li></li>
        <li><a href="http://127.0.0.1:5500/home.html">Acueill</a></li>
        <li><a href="#">Produit</a></li>
        <li><a href="http://127.0.0.1:5500/about_us.html">A propos de nous</a></li>
        <li><a href="http://127.0.0.1:5500/contact_us.html">Contactez nous</a></li>
        <li><a href="user.html"><img src={userimg} alt="user icon" /></a></li>
        <li><a href="#"><img src={cartimg} alt="user icon" /></a></li>
      </ul>
      <form>
        <input type="text" name="text1" placeholder="search..." />
        <input type="submit" name="submit1" className="search" value="search" />
      </form>
      <img src="https://cdn-icons-png.flaticon.com/512/3894/3894275.png" alt="menu icon" />
    </nav>
  );
}

export default NAV;

