import React from 'react'
import "./Header.css"
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import heart2 from './images/heart2.png';
import roundarrow from './images/roundarrow.png';
import shoppingtrooly from './images/shoppingtrooly.png';
import { GrUserManager } from 'react-icons/gr';


const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="cntainer-xxl">
          <div className="row">
            <div className="col-6">
                <p className='p1'>Free Shipping Over $100 $ Free Return</p>
            </div>
            <div className="col-6">
                <p className= "p2">
                    Hotline:<a className = "text-white"href="Tel: +91 7352648595">+91 7352648595</a>
                </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-2'>
                    <h2>
                        <Link className='text-white'>Dev Corner</Link>
                    </h2>
                </div>
                <div className='col-5'>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="search your product.." aria-label="search your product.." aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2" ><BsSearch /></span>
                </div>
                </div>
                <div className='col-5'>
                    <div className='header-upper-links d-flex align-items-center justify-content-between'>
                        <div>
                            <Link  to='/Compare-Product' 
                             className='d-flex align-items-center gap-10 text-white'>
                              <img src={roundarrow} className='fs-1 text-white' alt='' />
                              <p className='mb-0'>Compare<br />Product
                              </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/Favourate-Wish List' 
                             className='d-flex align-items-center gap-10 text-white'>
                              <img src={heart2} className='text-white' alt='' />
                              <p className='mb-0'>Favourate<br />Wish List
                              </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/Log-in-Account'
                             className='d-flex align-items-center gap-10 text-white'>
                             <div className=''><GrUserManager className='fs-1' /></div>
                             <p className='mb-0'>Log<br />in Account</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/Cart'
                             className='d-flex align-items-center gap-10 text-white'>
                              {/* <img className='' src="images/shoppingtrooly.png" alt=''/> */}
                              <img src={shoppingtrooly} alt='trolly' className='text-white' />
                              <div className='d-flex flex-column gap-10' >
                                <span className='badge bg-white text-dark'>0</span>
                                <p className='mb-0 text-white'>Cart</p>
                              </div>
                              
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xl'>
        
          <div className='row'>
            <div className='col-5'>
                <div className='menu-bottom d-flex align-items-center gap-30'>
                <div> <div class="dropdown">
                 <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Dropdown button
                 </button>
                  <ul class="dropdown-menu">
                   <li><a class="dropdown-item" href="#1">Action</a></li>
                   <li><a class="dropdown-item" href="#1">Another action</a></li>
                   <li><a class="dropdown-item" href="#1">Something else here</a></li>
                   </ul>
                   </div></div>
                  <div className='menu-links'>
                    <div className='d-flex align-item-center gap-40'>
                        <NavLink to ="/">HOME</NavLink>
                        <NavLink to ="/store">our stor</NavLink>
                        <NavLink to ="/Blog">Blog</NavLink>
                        <NavLink to ="/contact">Contact</NavLink>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


