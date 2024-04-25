

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import product from '../../assets/images/product.jpg';
import productBack from '../../assets/images/product-back.jpg';
import { Card } from 'react-bootstrap';

const MainBook = ({hasOffer , offerMount}) => {
  const [activeBtn, setActiveBtn] = useState(null);

  const toggleActiveBtn = (btnName) => {
    setActiveBtn(btnName === activeBtn ? null : btnName);
  };

  return (
    <>
      <Card className="card product-card">
        <div className="card-img">
          { hasOffer && <>
            <div class="has-offer">
              <span>{offerMount}</span>
            </div>
            </>}
          <div className="controls">
            <button
              className={`btn ${activeBtn === 'cart' ? 'red' : ''}`}
              onClick={() => toggleActiveBtn('cart')}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              className={`btn fav-btn ${activeBtn === 'heart' ? 'red' : ''}`}
              onClick={() => toggleActiveBtn('heart')}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
            <button
              className={`btn ${activeBtn === 'arrow' ? 'red' : ''}`}
              onClick={() => toggleActiveBtn('arrow')}
            >
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </button>
          </div>
          <span className="overlay"></span>
          <div className="img">
            <img src={product} alt=""/>
          </div>
          <div className="img img-back">
            <img src={productBack} alt=""/>
          </div>
        </div>
        <Card.Body className="card-body">
          <Link to="/books/2" className="link"></Link>
          <h5 className="title">a novel idea</h5>
          <p className="desc">بواسطة ستيفن كينج</p>
          <p className="price">29 ريال سعودي</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainBook;
