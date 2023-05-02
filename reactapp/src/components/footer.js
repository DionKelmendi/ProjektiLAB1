import { React } from 'react'

export default function Footer() {
  return (
    <footer>

      <div className='container'>
        <div className='item'>
          <h4><b>Company</b></h4><br />
          <a href="#"><p>History</p></a>
          <a href="#"><p>Location</p></a>
          <a href="#"><p>Team</p></a>
          <a href="#"><p>Media</p></a>
        </div>

        <div className='item'>
          <h4><b>Social Networks</b></h4><br />
          <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-square-snapchat"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>

        <div className='item'>
          <h4><b>Want to recieve news?</b></h4><br />
          <input type="text" placeholder='Enter email'></input>
          <input type="submit" value="Subscribe"></input>
        </div>
      </div>
      <hr />

      <h3>Copyright ©2023 Auto Paradise</h3>
    </footer>
  )
}