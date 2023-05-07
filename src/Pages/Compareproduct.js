import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';
// import { RxCross1 } from 'react-icons/rx'


const Compareproduct = () => {
  return (
  <>
    <section className='wislist-wrapper'>
     <Meta title={"Compare products"}/>
     <BreadCrumb title='Compare products' />
      <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            {/* here we will add diffrent images with diffrent details */}
         <div className='col-3 '>
          <div className='compare-product-card position-relative cmpr '>
            {/* <RxCross1 className='position-absolute d-flex flot fs-2'/> */}
            <img className='position-absolute cross img-fluid' src='images/crs1.jpg' alt='crss' />
           <div className='product-card-image'>
            <img className='align-items-center img-fluid' src='images/opi10.jpg' alt='' />
           </div>
           <div className='compare-product-details'>
             <h5 className='title mt-2'>
             Daniel Wellington
               Analog Women's Watch (Blue Dial Silver Colored Strap)
             </h5>
             <h6 className='price my-3'>$35.00</h6>
           </div>
           <div className='product-detail'>
            <h5>Brand:</h5>
            <p>Denial</p>
           </div>
           <div className='product-detail'>
            <h5>Type:</h5>
            <p>Hand Watch</p>
           </div>
           <div className='product-detail'>
            <h5>SKU:</h5>
            <p>SKU033</p>
           </div>
           <div className='product-detail'>
            <h5>Availavility:</h5>
            <p>In STOCK</p>
           </div>
           <div className='product-detail'>
            <h5>Color:</h5>
            <ul className='colors ps-0'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           </div> 
           <div className='product-detail'>
            <h5>Size:</h5>
            <div className='d-flex gap-10'>
                <p>S</p>
                <p>M</p>
            </div>
           </div>          
          </div>
          
         </div>
         <div className='col-3'>
          <div className='compare-product-card position-relative cmpr'>
            {/* <RxCross1 className='position-absolute d-flex flot fs-2'/> */}
            <img className='position-absolute cross' src='images/crs1.jpg' alt='crss' />
           <div className='product-card-image'>
            <img className='align-items-center img-fluid' src='images/ipada5.jpg' alt='' />
           </div>
           <div className='compare-product-details'>
             <h5 className='title mt-2'>
             FROZIL Digital Watch Multi-Functional Automatic Strap Waterproof Sports Watch
             </h5>
             <h6 className='price my-3'>$55.00</h6>
           </div>
           <div className='product-detail'>
            <h5>Brand:</h5>
            <p>Frozel</p>
           </div>
           <div className='product-detail'>
            <h5>Type:</h5>
            <p>Hand Watch</p>
           </div>
           <div className='product-detail'>
            <h5>SKU:</h5>
            <p>SKU045</p>
           </div>
           <div className='product-detail'>
            <h5>Availavility:</h5>
            <p>OUT OFSTOCK</p>
           </div>
           <div className='product-detail'>
            <h5>Color:</h5>
            <ul className='colors ps-0'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           </div> 
           <div className='product-detail'>
            <h5>Size:</h5>
            <div className='d-flex gap-10'>
                <p>S</p>
                <p>M</p>
            </div>
           </div>          
          </div>
          
         </div>
         <div className='col-3'>
          <div className='compare-product-card position-relative cmpr'>
            {/* <RxCross1 className='position-absolute d-flex flot fs-2'/> */}
            <img className='position-absolute cross' src='images/crs1.jpg' alt='crss' />
           <div className='product-card-image'>
            <img className='align-items-center img-fluid' src='images/ipada6.jpg' alt='' />
           </div>
           <div className='compare-product-details'>
             <h5 className='title mt-2'>
                Analog Day & Date Display Wrist Watch for Men & Boys (Black)
             </h5>
             <h6 className='price my-3'>$65.00</h6>
           </div>
           <div className='product-detail'>
            <h5>Brand:</h5>
            <p>Matrix</p>
           </div>
           <div className='product-detail'>
            <h5>Type:</h5>
            <p>Hand Watch</p>
           </div>
           <div className='product-detail'>
            <h5>SKU:</h5>
            <p>SKU067</p>
           </div>
           <div className='product-detail'>
            <h5>Availavility:</h5>
            <p>In STOCK</p>
           </div>
           <div className='product-detail'>
            <h5>Color:</h5>
            <ul className='colors ps-0'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           </div> 
           <div className='product-detail'>
            <h5>Size:</h5>
            <div className='d-flex gap-10'>
                <p>S</p>
                <p>M</p>
            </div>
           </div>          
          </div>
          
         </div>
         <div className='col-3'>
          <div className='compare-product-card position-relative cmpr'>
            {/* <RxCross1 className='position-absolute d-flex flot fs-2'/> */}
            <img className='position-absolute cross' src='images/crs1.jpg' alt='crss' />
           <div className='product-card-image'>
            <img className='align-items-center img-fluid' src='images/ipada7.jpg' alt='' />
           </div>
           <div className='compare-product-details'>
             <h5 className='title mt-2'>
               Fire-Boltt Pioneer 1.95" Smart Watch, High Resolution 320 *
             </h5>
             <h6 className='price my-3'>$305.00</h6>
           </div>
           <div className='product-detail'>
            <h5>Brand:</h5>
            <p>Fire-Boltt</p>
           </div>
           <div className='product-detail'>
            <h5>Type:</h5>
            <p>Smart Watch</p>
           </div>
           <div className='product-detail'>
            <h5>SKU:</h5>
            <p>SKU004</p>
           </div>
           <div className='product-detail'>
            <h5>Availavility:</h5>
            <p>Out Of STOCK</p>
           </div>
           <div className='product-detail'>
            <h5>Color:</h5>
            <ul className='colors ps-0'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           </div> 
           <div className='product-detail'>
            <h5>Size:</h5>
            <div className='d-flex gap-10'>
                <p>S</p>
                <p>M</p>
            </div>
           </div>          
          </div>
          
         </div>
        </div>
     </Container>
    </section>
  </>
  );
};

export default Compareproduct;

