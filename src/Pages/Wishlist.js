import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const Wishlist = () => {
  return (
    <>
     <section className='wislist-wrapper'>
      <Meta title={"Wishlist"}/>
      <BreadCrumb title='Wishlist'/>
      <div className=' home-wrapper-2 py-2'>
       <div className='container-xl'>
        <div className='row'>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/crs1.jpg' alt='crss' />
              <div className='wishlist-card-image'>
                <img src='images/spkr231.jpg' className='img-fluid' alt='spkr'/>
              </div>
              <div> <h5 className='title py-3 mt-4 px-2'>
              boAt Stone 620 Bluetooth Speaker with 12W RMS Stereo Sound, 10HRS Playtime, TWS Feature, IPX4, Multi-Compatibility Mode(Red)
             </h5>
             <h6 className='price my-3 text-danger'>$100.00</h6></div>
            </div>
            
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/crs1.jpg' alt='crss' />
              <div className='wishlist-card-image'>
                <img src='images/ipada8.jpg' className='img-fluid' alt='spkr'/>
              </div>
              <div> <h5 className='title py-3 mt-4 px-2'>
             
                Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black) (100% refundable)
             </h5>
             <h6 className='price my-3 text-danger'>$100.00</h6></div>
            </div>
            
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/crs1.jpg' alt='crss' />
              <div className='wishlist-card-image'>
                <img src='images/ipada9.jpg' className='img-fluid' alt='spkr'/>
              </div>
              <div> <h5 className='title py-3 mt-4 px-2'>
              CLYMB Men's Casual Cosco Running Shoes,Training Shoes,Gym Shoes,Sports Shoes,Walking Shoes for Mens, Boys (discount for students)
             </h5>
             <h6 className='price my-3 text-danger'>$100.00</h6></div>
            </div>
            
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/crs1.jpg' alt='crss' />
              <div className='wishlist-card-image'>
                <img src='images/ipada10.jpg' className='img-fluid' alt='spkr'/>
              </div>
              <div> <h5 className='title py-3 mt-4 px-2'>
              boAt Wave Call Smart Watch, Smar Bluetooth Calling Chip, 1.69 HD Display with 550 NITS & 70% Color Gamut, 150+ Watch Faces, Multi-Sport
             </h5>
             <h6 className='price my-3 text-danger'>$100.00</h6></div>
            </div>
            
          </div>
        </div>
      </div>
     </div>
    </section>
    </>
  );
};

export default Wishlist;
