import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function SpecialProduct2() {
  return (
    <div className='col-4'>
     <div className='special-product-card filter-card-div-3'>
     <div className='d-flex justify-content-between'>
        <div>
            <img src='images/ipad6.jpg' alt='watch' className='spe' />
        </div>
        <div className='special-product-content'>
            <h5>Sony</h5>
            <h6 className='title'>
            Sony Alpha ILCE 6100L 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm Power Zoom... 
            </h6>
            <ReactStars
         count={5}
         size={24}
         value="3"
         edit={false}
          activeColor="#ffd700" />
          <p className='price'>
            <span className='red-p'><span className='text-danger'>$100</span></span> &nbsp; <strike>$200</strike>
          </p>
          <div className='discount-till d-flex align-items-center gap-10'>
            <p className='mb-0'>
            <b>5</b> days
            </p>
            <div className='d-flex align-items-center gap-10'>
                <span className='badge rounded-circle p-2 bg-warning'>09</span>:
                <span className='badge rounded-circle p-2 bg-warning'>31</span>:
                <span className='badge rounded-circle p-2 bg-warning'>15</span>
            </div>
            </div>
            <div className='prod-count my-3'>
              <p>product: 5</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:'56%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
          </div>
          <Link className='button3'>option</Link>
        </div>
     </div>
     </div>
    </div>
  );
}

export default SpecialProduct2;
