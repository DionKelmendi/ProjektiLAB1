import React from 'react';

export default function CategoryItem({ categoryLogo, categoryName, carAmount }) {
  return (
    <a href="#">
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
    </a>
  )
}