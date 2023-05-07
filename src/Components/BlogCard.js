import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return ( 
  <div className='col-3'> 
   <div className='blog-card filter-card-div-3'>
    <div className='cart-image '>
     <img src='images/gls1.webp'alt=''className='m1 w-100 img-fluid'/>
    </div>
    <div className='blog-content'>
     <p className='date'>7 mar 2023</p>
     <h5 className='totle'>A beautifull sunday morning renaissance</h5>
     <p className='disc'>you're only as good as your last collection which is an enormous pressure. i think there is something about </p>
     <Link to= "/Blog/:id" className='button4'>more</Link>

    </div>
   
   </div>
  </div>
  );  
};

export default BlogCard;
