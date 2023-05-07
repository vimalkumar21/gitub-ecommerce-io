import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import ipad9 from './images/ipad9.jpg';
import heart2 from './images/heart2.png';
import crossa from './images/crossa.jpg';
import eye from './images/eye.png';
import vell from './images/vell.png';

const ProductCard1 = (props) => {
   const { grid }  = props;
   let location = useLocation();
      
  return ( 

    <>
 <div className={`${location.pathname === "/store" ? `col-${grid}` : "col-3"} pb-3  gr`}> 
  
  <Link to='product/:id' className='product-card position-relative text-dark filter-card-div-3'>
   <Link className='product-image '>
    {/* <img src='images/wch1.jfif' alt='watchimg' className='m1 img-fluid'/> */}
    <img src={ipad9} alt='jnvsj' className='m1 img-fluid' />
   </Link>
   <div className='product-details'>
       <h6 className='brand '>boAt</h6>
       <h5 className='product-title d-flex'>boAt Rockerz 550 Bluetooth Wireless with Mic Upto 20 Hours Playback, </h5>
       {/*   <ReactStars this is importing for star rating */}
       {/* by use of vlaue we can give rating from our side edit will not allow to select rating*/}
       <ReactStars
        count={5}
        size={24}
        value="3"
        edit={false}
         activeColor="#ffd700" />
       <p className='price'>$100:00</p>
   </div>
   <div className='action-bar position-absolute'>
       <div className='d-flex gap-15 flex-column '>
           <div>
           <Link>
             {/* <img className='sze' src='images/heart icon.png' alt='arrow' /> */}
             <img className='sze' src= {heart2} alt='arrow' />
           </Link>
           </div>
           <Link>
             {/* <img className='sze' src='images/cross a.jpg' alt='arrow' /> */}
             <img className='sze' src= {crossa} alt='arrow' />
           </Link>
           <Link>
             {/* <img className='sze' src='images/eye.png' alt='arrow' /> */}
             <img className='sze' src= {eye} alt='arrow' />
           </Link>
           <Link>
             {/* <img className='sze' src='images/vell.png' alt='arrow' /> */}
             <img className='sze' src= {vell} alt='arrow' />
           </Link>
       </div>
   </div>
   </Link>
  </div>
   
  </>
  );  
};
export default ProductCard1;
