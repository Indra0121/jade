import React, { useState } from 'react';
import componentArray from './productlist';
import './products.css';
import SinglePage from './single_page';

const PRODUCTS = () => {
  const [pp, setPp] = useState(null);
  
  const handleViewMore = (id) => {
    console.log(`View More clicked for ${id}`);
  };
  
  const func = (idx) => {
    const parsedIndex = parseInt(idx, 10);
    setPp(parsedIndex);
    console.log(parsedIndex);
  };
  
  return (
    
    <main>
    {pp !== null && (
      <SinglePage 
        title={componentArray[pp].title}
        descp={componentArray[pp].descp}
        img1={componentArray[pp].img1}
        img2={componentArray[pp].img2}
        img3={componentArray[pp].img3}
        img4={componentArray[pp].img4}
        img5={componentArray[pp].img5}
      />
    )}
      <div className='cards'>
        {componentArray.map((component, index) => (
          <div key={index} className="card" id={`card-${index}`}>
            <img className='rimg' src={component.img1} alt={component.title} />
            <h3>{component.title}</h3>
            <button id={`button-${index}`} onClick={() => func(index)}>View More</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PRODUCTS;
