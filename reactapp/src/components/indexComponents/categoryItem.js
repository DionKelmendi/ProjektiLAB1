import React from 'react';

export default function CategoryItem({ categoryLogo, categoryName, carAmount }) {
  return (
    <a href="#">
      <div className='item'>
        <img className='categoryLogo' src={categoryLogo} />
        <div>
          <h2> {categoryName} </h2>
          <h4> {carAmount} Vehicles in Inventory</h4>
        </div>
      </div>
    </a>
  )
}