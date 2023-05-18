import React from 'react';

function NAV() {
  return (
    <nav>
      <ul className="links">
        <li></li>
        <li><a href="home.html">Acueill</a></li>
        <li><a href="single_page.html">Produit</a></li>
        <li><a href="about_us.html">A propos de nous</a></li>
        <li><a href="contact_us.html">Contactez nous</a></li>
        <li><a href="#"><img src="img/ag.png" alt="logo" /></a></li>
        <li><a href="user.html"><img src="../../../img/usericon.png" alt="user icon" /></a></li>
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

