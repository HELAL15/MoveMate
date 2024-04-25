import React from 'react'
import { Link } from 'react-router-dom'
import category from '../../assets/images/category.png'

const CatCards = () => {
  return (
    <>
      <Link to="books">
              <div className="card">
                <div className="card-img">
                  <div className="img">
                    <img src={category} alt=""/>
                  </div>
                </div>
                <h5 className="card-name">كتب ادبية</h5>
              </div>
            </Link>
    </>
  )
}

export default CatCards
