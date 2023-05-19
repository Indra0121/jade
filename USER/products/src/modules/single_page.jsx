import React, { useEffect } from 'react';

const SinglePage = ({ titre, descp, img1, img2, img3, img4, img5 }) => {
  useEffect(() => {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');
    const box4 = document.querySelector('.box4');
    const title = document.querySelector('title');
    const titled = document.querySelector('#titled');
    const active = document.querySelector('.active');
    const qtp = document.querySelector('.text form .p');
    const qtn = document.querySelector('.text form .n');
    const quantity = document.querySelector('.quantity');
    let q = 0;

    active.classList.add('box1');
    console.log(titled.textContent);
    title.innerHTML = titled.textContent;

    box1.addEventListener('click', (e) => {
      e.preventDefault();
      active.classList.add('box1');
      active.classList.remove('box2');
      active.classList.remove('box3');
      active.classList.remove('box4');
      box1.classList.add('dashed');
      box2.classList.remove('dashed');
      box3.classList.remove('dashed');
      box3.classList.remove('dashed');
    });

    box2.addEventListener('click', (e) => {
      e.preventDefault();
      active.classList.add('box2');
      active.classList.remove('box1');
      active.classList.remove('box3');
      active.classList.remove('box4');
      box1.classList.remove('dashed');
      box2.classList.add('dashed');
      box3.classList.remove('dashed');
      box4.classList.remove('dashed');
    });

    box3.addEventListener('click', (e) => {
      e.preventDefault();
      active.classList.add('box3');
      active.classList.remove('box1');
      active.classList.remove('box2');
      active.classList.remove('box4');
      box1.classList.remove('dashed');
      box2.classList.remove('dashed');
      box3.classList.add('dashed');
      box4.classList.remove('dashed');
    });

    box4.addEventListener('click', (e) => {
      e.preventDefault();
      active.classList.add('box4');
      active.classList.remove('box1');
      active.classList.remove('box2');
      active.classList.remove('box3');
      box1.classList.remove('dashed');
      box2.classList.remove('dashed');
      box3.classList.remove('dashed');
      box4.classList.add('dashed');
    });

    qtp.addEventListener('click', (e) => {
      e.preventDefault();
      q += 1;
      quantity.value = q;
    });

    qtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (q > 0) {
        q -= 1;
        quantity.value = q;
      }
    });
  }, []); // Empty dependency array to run the code only once when the component mounts

  return (
    <main>
      <div className="container">
        <div className="photo">
          <div className="active box">
            <img src={img1} alt="Image 1" />
          </div>
          <div className="boxes">
            <div className="mini box box1">
              <img src={img2} alt="Image 2" />
            </div>
            <div className="mini box box2">
              <img src={img3} alt="Image 3" />
            </div>
            <div className="mini box box3">
              <img src={img4} alt="Image 4" />
            </div>
            <div className="mini box box4">
              <img src={img5} alt="Image 5" />
            </div>
          </div>
        </div>
        <div className="text">
          <h1 id="titled">{titre}</h1>
          <p>{descp}</p>
          <form>
            <input className="p" type="submit" value="+" />
            <input className="quantity" type="number" value="0" readOnly placeholder="" />
            <input className="n" type="submit" value="-" />
          </form>
          <button>Buy</button>
        </div>
      </div>
    </main>
  );
};

export default SinglePage;
