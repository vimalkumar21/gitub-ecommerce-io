import React from 'react'
import markoff from './images/markoff.webp';
import markbeu from './images/markbeu.webp';
import markele from './images/markele.webp';
import markfat from './images/markfat.webp';
import markfli from './images/markfli.webp';
import markgroc from './images/markgroc.webp';
import markmob from './images/markmob.webp';
import marktv from './images/marktv.webp';
import { Link } from 'react-router-dom';

const Marque = () => {
  return (
    <>
      <section>
        <div className=''>
          <div className='home-wrapper-2'>
           <div className='container-xl'>
            <div className='row'>
              <div className='col-12'>
                <div className='d-flex align-items-center gap1-38'>
                  <div className='flex-column '>
                   <div className=''>
                    <img src={markoff} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className=' mark-div' style={{paddingLeft:'20px'}} >Top-Offers</Link>
                  </div>
                  <div className='flex-column'>
                   <div className=''>
                    <img src={markbeu} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className='mark-div' style={{paddingLeft:'37px'}} >Beuty</Link>
                  </div>
                  <div className='flex-column'>
                   <div className=''>
                    <img src={markele} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className='mark-div' style={{paddingLeft:'20px'}} >Electronics</Link>
                  </div>
                  <div className='flex-column'>
                   <div className=''>
                    <img src={markfli} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className='mark-div' style={{paddingLeft:'36px'}} >Home & Furniture</Link>
                  </div>
                  <div className='flex-column'>
                   <div className=''>
                    <img src={markfat} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className='mark-div' style={{paddingLeft:'37px'}}  >Fasion</Link>
                  </div>
                  <div className='flex-column'>
                   <div className=''>
                    <img src={markgroc} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className='mark-div' style={{paddingLeft:'37px'}}  >Grocery</Link>
                  </div>
                  <div className='flex-column'>
                   <div className=''>
                    <img src={marktv} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className='mark-div' style={{paddingLeft:'37px'}} >TV's & Appliances</Link>
                  </div>
                  <div className='flex-column'>
                   <div className=''>
                    <img src={markmob} alt='off' className='' />
                   </div>
                   <Link to='' alt='' className='mark-div' style={{paddingLeft:'30px'}}  >Mobiles & Tablets</Link>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
   
  );
};

export default Marque;
