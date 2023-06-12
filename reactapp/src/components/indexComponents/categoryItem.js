import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryItem({ categoryLogo, categoryName, carAmount }) {
  return (
    <Link to="/cars" state={{ query: categoryName !== "Other" ? categoryName : "" }}>
      <div className='item'>
        <img
          src={require('../../images/logos/' +
            categoryLogo + ".webp")}
          className="categoryLogo" alt="carLogo" />
        <div>
          <h2> {categoryName} </h2>
          <h4> {carAmount ? carAmount + " Vehicles in Inventory" : ""}</h4>
        </div>
      </div>
    </Link>
  )
}