import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { BsFillHouseFill, BsInfoLg } from 'react-icons/bs'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import Container from '../Components/Container';



const Contact = () => {
  return <div>
    <section className='store-wrapper'>
    <Meta title={"Contact-us"}/>
     <BreadCrumb title='Contact-us' />
     <Container className='contact-wrapper py-1 home-wrapper-2'>
        <div className='row'>
         <div className='col-12'>
          <div className='contact-wrapper-contact w-100% mb-1'>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23306.957470851463!2d77. 32083093282947!3d28.644302482352327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfad07ac6ca3d%3A0x4797942eb250fd96!2sVaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1680108368796!5m2!1sen!2sin" width="100%" height="450" className="border:2;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className='col-12 my-3'>
         <div className=' contact-inner-wrapper  d-flex justify-content-between'>
          <div>
            <h3 className='contact-title mb-3'>Contact</h3>
             <form action='' className='-d-flex flex-column '>
              <div>
               <input type='text' className='form-control' id='dcme' placeholder='name'></input>
           </div>
           <div>
            <input type='email' className='form-control' id='dcme' placeholder='email'></input>
          </div>
          <div>
            <input type='number' className='form-control' id='dcme' placeholder='contact number'></input>
          </div>
          <div>
            {/* here we can see a error because we are using double id in sdame fields but it it working */}
            <textarea name='' type = 'text' className='w-100 form-control ' id='dcme'  cols='30' rows='10'   placeholder='comments'> </textarea>
          </div>
           <div>
            <button className='button4 border-0'>submit</button>
           </div>
          </form>
          </div>
          <div>
          <h3 className='contact-title mb-4'>Get in tuch with us</h3>
          <div >
            {/* here we have imported icon from react icons */}
            <ul className='ps-1'>
              <li className='mb-3 d-flex align-items- gap-15'>
                <BsFillHouseFill className='fs-4' />
                <address>HN.244, near village chaupal, barelly up</address>
              </li>
              <li className='mb-3 d-flex align-items-center gap-15'>
                <FiPhoneCall className='fs-4' />
                <a href='tel: +91 7642934765'><span className='text-dark'>+7642934765</span></a>
              </li>
              <li className='mb-3 d-flex align-items-center gap-15'>
                <FiMail className='fs-4' />
                <a href='vimal.kumar34@gmail.com'><span className='text-dark'>+vimal.kumar34@gmail.com</span></a>
              </li>
              <li className='mb-3 d-flex align-items-center gap-15'>
                <BsInfoLg className='fs-4' />
                <p className='mb-3'>Monday - Friday 10AM - 8PM </p>
              </li>
            </ul>
          </div>
          </div>
         </div>
         
        </div>
       </div>
      
     </Container>
     </section>
  </div>
};

export default Contact;
