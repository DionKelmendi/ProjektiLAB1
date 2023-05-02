import { React } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='item'>
          <h2>Auto Paradise</h2>
        </div>
        <div className='item'>
          <h3>Find your slice of heaven at Auto Paradise!</h3>
        </div>
        <div className='item'>
          <Link to="/signIn"><button className=''> Sign in here! </button></Link>
        </div>
      </div >
    </section >
  )
}