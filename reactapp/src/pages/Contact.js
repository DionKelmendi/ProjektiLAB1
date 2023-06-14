import { React, useState } from "react";
import Footer from '../components/footer'
import "../index.css";


// // import { BsWhatsapp } from 'react-icons/bs';
// // import { MdOutlineMailOutline } from 'react-icons/md';
// // import { useRef } from 'react';
// // import emailjs from 'emailjs-com';

// function Contact() {
//   //   const form = useRef();

//   //   const sendEmail = (e) => {
//   //     e.preventDefault();

//   //     emailjs.sendForm('service_logddqq', 'template_cgcoypa', form.current, 'EzLyRehMqd1CzThPB')
//   //       .then((result) => {
//   //         console.log(result.text);
//   //       }, (error) => {
//   //         console.log(error.text);
//   //       });
//   //   };
//   return (
//     <>
//       <section className="mainContact" id='contact'>
//         <div className="container">
//           <h5>Get In Touch</h5>
//           <h2>Contact Me</h2>
//           <div className='container contact__container'>
//             <div className='contact__options'>
//               <article className="contact__option">
//                 {/* <MdOutlineMailOutline className='contact__option-icon' /> */}
//                 <h4>Email</h4>
//                 <h5>autoparadise@gmail.com</h5>
//                 <a href='#'>Send a message </a>
//               </article>
//               <article className="contact__option">
//                 {/* <BsWhatsapp className='contact__option-icon' /> */}
//                 <h4>whatsapp</h4>
//                 <h5>+38345880254</h5>
//                 <a href='#'>Send a message </a>
//               </article>
//             </div>
//             {/* <form ref={form} onSubmit={sendEmail}> */}
//             <form>
//               <input id="contactTextArea" type="text" name='name' placeholder="Name" required></input>
//               <input id="contactTextArea" type="email" name='email' placeholder="email" required></input>
//               <textarea id="contactTextArea" name='message' placeholder="Message" required></textarea>
//               <button type="submit" className='btn btn primary'>send Message</button>
//             </form>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   )
// }

// export default Contact

export default function Contact() {

  const [success, setSuccess] = useState([])

  const sendMessage = (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let phone = e.target[2].value
    let title = e.target[3].value;
    if (title == "") {
      title = "No title";
    }
    let message = e.target[4].value;

    let body = { name, email, phone, title, message }
    console.log(body);

    const API = 'http://127.0.0.1:8000/prova/message/';
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("title").value = "";
    document.getElementById("message").value = "";

    setSuccess("Message delivered!")
  }

  return (
    <>
      <section className="contactMain">

        <div className="container">

          <h1 className="contactTitle">
            CONTACT
          </h1>
          <div className="contactForm">
            <div>
              <h1>Get in touch</h1>
              <p>If you have any questions you want to ask us, here is the right place</p>
            </div>
            <form onSubmit={sendMessage}>
              <div>
                <label htmlFor="name">First and Last Name</label><br />
                <input id="name" type="text" name="name" placeholder="Write your name here..." required />
              </div>
              <div>
                <label htmlFor="email">Email address</label><br />
                <input id="email" type="email" name="email" placeholder="Write your email here..." required />
              </div>
              <div>
                <label htmlFor="phone">Phone number</label><br />
                <input id="phone" type="text" name="phone" placeholder="Write your phone number here..." required />
              </div>
              <div>
                <label htmlFor="title">Title</label><br />
                <input id="title" type="text" name="title" placeholder="Write your title here..." />
              </div>
              <div>
                <label htmlFor="message">Message</label><br />
                <textarea id="message" name="message" placeholder="Write your message here..." required />
              </div>
              <button type="submit">Send Message</button>
              {success ? <p className="successP">{success}</p> : <></>}
            </form>
          </div>
          <div className="ourInfo">
            <div className="contactInfo">
              <div className="item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h3>Location</h3>
                  <p>Location name</p>
                </div>
              </div>

              <div className="item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h3>Phone Number</h3>
                  <p>+383 49 123 456 / +383 49 987 654 </p>
                </div>
              </div>

              <div className="item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p> autoparadise@gmail.com </p>
                </div>
              </div>

            </div>
            <div className="schedule">
              <h3>Work schedule</h3>
              <hr />

              <p><span>Monday</span> 9:00 AM to 5:30 PM </p>
              <p><span>Tuesday</span> 9:00 AM to 5:30 PM </p>
              <p><span>Wednesday</span> 9:00 AM to 5:30 PM </p>
              <p><span>Thursday</span> 9:00 AM to 5:30 PM </p>
              <p><span>Friday</span> 9:00 AM to 5:30 PM </p>
              <p><span>Saturday</span> 9:00 AM to 5:30 PM </p>
              <p><span>Sunday</span> closed</p>
            </div>
          </div>
        </div >
      </section >
      <Footer />
    </>
  )
}