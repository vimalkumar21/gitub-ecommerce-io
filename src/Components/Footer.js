import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from 'react-icons/bs';
// import uparw12 from './images/uparw12.png';
import { BsBoxArrowUpRight } from 'react-icons/bs';


const Footer = () => {
  return (
  <> 
     <footer className='py-3'>
          <div className='container-xl'>
            <div className='row align-item-center'>
             <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-item-center'>
               {/* <img src={uparw12} alt='anything' /> */}
                 {/* <img src='images/up1-right-arrow--v1.png' alt='anything'/> */}
                 <BsBoxArrowUpRight className='fs-1 text-white' />
                 
                 
                 <h2 className='mb-0 text-white'>subscribe for more updates</h2>
                 
               </div>
              </div>
              <div className='col-7'>
              <div className="input-group mb-2">
                  <input type="email" className="form-control" placeholder="enter your email..." aria-label="enter your email..." aria-describedby="basic-addon2" />
                 <span className="input-group-text btn" id="basic-addon2" >subscribe</span>
                </div>
              </div>
              </div>
             </div> 
      </footer> 
     <footer className='py-3'>
      <div className='container xl'>
        <div className='row text-white'>
          <div className='col-4'>
            <h4>contact us</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='ty-2 mb-2 text-white'>Demo Store</Link>
              <Link className='ty-2 mb-2 text-white'>No.1259 Freedom,New York, 11111</Link>
              <Link className='ty-2 mb-2 text-white'>United States</Link>
              <Link className='ty-2 mb-2 text-white'>+91 9645832674</Link>
              <Link className='ty-2 mb-2 text-white'>Demo@Exampledemo.com</Link>
              <div className='social-icons d-flex align-item-center gap-15'>
                <a href='' />
                <BsLinkedin className='fs-5' />
               
                <a href=''  />
                <BsInstagram className='fs-5' />
              
              
                <a href='' />
                <BsGithub className='fs-5' />
             
              
                <a href='' />
                <BsYoutube className='fs-5' />
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4>information</h4>
            <div className='footer-link d-flex flex-column '>
              <Link to='/Privacy-Policy' className='ty-2 mb-2 text-white'>Privacy Policy</Link>
              <Link to='/Refund-Policy' className='ty-2 mb-2 text-white'>Refund Policy</Link>
              <Link to='/Shipping-Policy' className='ty-2 mb-2 text-white'>Shipping policy</Link>
              <Link to='/Term-And-Condition' className='ty-2 mb-2 text-white'>Term And Condition</Link>
              <Link className='ty-2 mb-2 text-white'>Biogs</Link>
            </div>
          </div>
          <div className='col-3'>
          <h4>account</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='ty-2 mb-2 text-white'>Search</Link>
              <Link className='ty-2 mb-2 text-white'>About</Link>
              <Link className='ty-2 mb-2 text-white'>Faq</Link>
              <Link className='ty-2 mb-2 text-white'>Contact</Link>
              <Link className='ty-2 mb-2 text-white'>Size chart</Link>
            </div>
          </div>
          <div className='col-2'>
          <h4>quick links</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='ty-2 mb-2 text-white'>Accesories</Link>
              <Link className='ty-2 mb-2 text-white'>Headphones</Link>
              <Link className='ty-2 mb-2 text-white'>Tablates</Link>
              <Link className='ty-2 mb-2 text-white'>Smart Watches</Link>
              <Link className='ty-2 mb-2 text-white'>Laptop</Link>
            </div>
          </div>
        </div>
      </div>         
     </footer>
     <footer className='py-3'>
         <div className='container-xl'>
          <div className='row'>
           <div className='col-12'>
            <p className='text-center  text-white'>&copy; {new Date().getFullYear()}; proposed by developer</p>
      </div>
    </div>
  </div>
 </footer> 
</>
  );  
};

export default Footer;
