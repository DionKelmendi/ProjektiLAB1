import { React } from 'react'

export default function SelectCar() {

  return (
    <>
      <div className='selectCar'>
        <label htmlFor="search">Search</label><br />
        <input id="search" name="search" type='text' placeholder='Search Here' />
      </div>

      <div className="selectCar">
        <label htmlFor="category">Category</label><br />
        <select id="category" >
          <option value="">Select Category</option>
          <option value="convertible">Convertible</option>
          <option value="coupe">Coupe</option>
          <option value="suv">SUV</option>
          <option value="station wagon">Station Wagon</option>
          <option value="sedan">Sedan</option>
          <option value="van">Van</option>
          <option value="other">Other</option>
        </select>
      </div>
    </>
  )
}

