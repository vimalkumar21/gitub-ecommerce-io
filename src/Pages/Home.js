import React from 'react'
import { Link } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import SpecialProduct from '../Components/SpecialProduct';
import Container from '../Components/Container';
import Marquee from 'react-fast-marquee';
import Marque from '../Components/Marque';
import Animation from './Animation';
import SpecialProduct1 from '../Components/SpecialProduct1';
import SpecialProduct2 from '../Components/SpecialProduct2';
import ProductCard1 from '../Components/ProductCard1';
import ProductCard2 from '../Components/ProductCard2';
import ProductCard3 from '../Components/ProductCard3';
import BlogCard1 from '../Components/BlogCard1';
import BlogCard2 from '../Components/BlogCard2';
import BlogCard3 from '../Components/BlogCard3';

const Home = () => {
  return <>
   <section className='store-wrapper'>
    <Animation />
    <Container className='home-wraper-1  py-5 mb-6'>
      <div className='row '>
        <div className='col-6 flx-wrp-div'>
          <div className=''>
           <div className='main-banner  position-relative p-3 '>
            <img src='images/device.2.webp' className='filter-card-div-3 img-fluid rounded-3 ' alt='main-banner' />
            <div className='main-banner-content position-absolute '>
              <h4 className='text-danger d-flex '>SUPER CHARGED FOR PROS</h4>
              <h5>iPad s13 +Pro</h5>
              <p>From $999.00 or $41.62/mo</p>
              <Link className='button4 main-div-2'>button</Link>
            </div>
          </div>
        </div>
        </div>
        <div className='col-6 '>
        <div className='d-flex flex-wrap justify-content-between py-3 gap-10 align-item-center'>
        <div className='small-banner position-relative'>
            <img src='images/ipad1.jpg' className='img-fluid rounded-3 main-div-3' alt='main-banner' />
            <div className='small-banner-content position-absolute'>
              <h4 className='text-danger'>BEST SAKE</h4>
              <h5>APPLE iPod MKMJ2HN</h5>
              <p>From 116900 <br /> 4999/mo</p>
              
            </div>
        </div>
        
        
        <div className='small-banner position-relative'>
            <img src='images/ipad2.jpg' className='img-fluid rounded-3 main-div-3' alt='main-banner' />
            <div className='small-banner-content position-absolute'>
              <h4 className='text-danger'>NEW ARRIVAL</h4>
              <h5>DJ Headphones</h5>
              <p>From 2600.00 <br /> 240.62/mo</p>
              
            </div>
        </div>
        
       
        <div className='small-banner position-relative'>
            <img src='images/ipad3.jpg' className='img-fluid rounded-3 main-div-3' alt='main-banner' />
            <div className='small-banner-content position-absolute'>
              <h4 className='text-danger'>NEW ARRIVAL</h4>
              <h5>pro Wireless Headset</h5>
              <p>From $199 <br /> $14.62/mo</p>
              
            </div>
        </div>
        
       
        <div className='small-banner position-relative'>
            <img src='images/ipad4.jpg' className='img-fluid rounded-3 main-div-3' alt='main-banner' />
            <div className='small-banner-content position-absolute'>
              <h4 className='text-danger'>NEW ARRIVAL</h4>
              <h5>Lenovo IdeaPad</h5>
              <p>From 33580 <br /> 2300/mo</p>
              
            </div>
        </div>
        
        
        </div>
        </div>
      </div>
    </Container>
 
    <Container class1='py-5'>
    <div className='row'>
        <div className='col-12 '>
          <div className='service d-flex align-item-center justify-content-between main-div-div filter-card-div-3'>
             <div className='d-flex align-items-center gap-15' style={{paddingLeft:'15px'}}>
              <img className='icons1' src='images/dl1.png'alt='' />
                <div>
                <h5>free shipping</h5>
                 <p className='mb-0'>from all orders over $100</p> 
              </div>
             </div>
             <div className='d-flex align-items-center gap-15'>
               <img className='icons2' src='images/gift1.png'alt='' />
               <div>
              <h5>daily surprise offer</h5>
              <p className='mb-0'>save up to 25% </p> 
            </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img className='icons2' src='images/headphone.png' alt='' />
            <div>
              <h5>support 24/7</h5>
              <p>shop with an expert</p> 
            </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img className='icons2' src='images/price.png' alt='' />
            <div>
              <h5>affordable prices</h5>
              <p>get factory default price</p> 
            </div>  
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img className='icons1'src='images/payment.png' alt='' />
            <div style={{paddingRight:'15px'}}>
              <h5>secure payment</h5>
              <p>100% protected payment</p> 
            </div> 
            </div>
            
          </div>
        </div>
      </div>
    </Container>
   {/* we will work letter on this dection */}
   <section className='home-wraper-3 py-5'>
    <div className='container-xl'>
      <div className='row'>
        <div className='col-12'>
           <div className='pb-3'>
           <div className='categories d-flex align-items-center justify-content-between filter-card-div-3 py-2'>
            <div className='d-flex align-items-center gap-15'>
            <div style={{paddingLeft:'10px'}}>
                <h6>computers & laptop</h6>
                <p>10 items</p>
              </div>
              <img className='color-lite ' src='images/lp3.webp' alt='' />
             <div>
               <h6>cameras and videos</h6>
                <p>10 items</p>
              </div>
              <img className='color-lite ' src='images/cm2.jpg' alt='' />
              <div>
                <h6>smart television</h6>
                <p>10 items</p>
              </div>
              <img className='color-lite ' src='images/tl1.webp' alt='' />
              <div>
                <h6>smart watchs</h6>
                <p>10 items</p>
              </div>
              <img className='color-lite ' src='images/sw1.webp' alt='' />
              <div>
                <h6>music & gaming</h6>
                <p>10 items</p>
              </div>
              <img className='color-lite' src='images/rm1.webp' alt='' />
              
            </div>
           </div>
           </div>
        </div>
      </div>
    </div>
  </section>
  <Container class1=' blog-wrapper home.wrapper-2 py-5'>
      <div className='row'>
        <div className='col-12'>
          <div className='section-heading '>Featured collection</div>
        </div>
        <ProductCard />
        <ProductCard1 />
        <ProductCard2 />
        <ProductCard3 />
       
        
        </div>
  </Container>
  <Container class1='famous-wrapper py-5 home-wrapper-2'>
      <div className='row'>
        <div className='col-3'>
          <div className='famous-card text-white position-relative filter-card-div-3'>
            <img src='images/igm5.jpeg' className='fms img-fluid' alt='watch'/>
            <div className='famous-content position-absolute'>
              <h6>BIG SCREEN</h6>
              <h4>Smart Watch Series 7</h4>
              <p>From $399 or $17.6/mo<br /> For 24 Month</p> 
            </div>  
          </div>
        </div>
        <div className='col-3'>
          <div className=' clr famous-card text-white position-relative filter-card-div-3'>
            <img src='images/lp1.jpg' className='fms img-fluid ' alt='watch'/>
            <div className='famous-content position-absolute'>
              <p>Studio disply</p>
              <h4 className='textile'>600 nits of brightness</h4>
              <p>27 inch-5k<br />retina display</p> 
            </div>  
          </div>
        </div>
        <div className='col-3'>
          <div className=' clr famous-card text-white position-relative filter-card-div-3'>
            <img src='images/iph1.jpg' className='fms img-fluid ' alt='watch'/>
            <div className='famous-content position-absolute'>
              <p>SMARTPHONES</p>
              <h4 className='text-white'>Smart phone 13 pro</h4>
              <p>now in green<br /> From $999</p> 
            </div>  
          </div>
        </div>
        <div className='col-3'>
          <div className=' clr famous-card text-white position-relative filter-card-div-3'>
            <img src='images/spk1.jfif' className='fms img-fluid ' alt='watch'/>
            <div className='famous-content position-absolute'>
              <p>HOMESPEEKERS</p>
              <h4 className='textile'>Room-filling sound</h4>
              <p>From $399 or $17.6/mo</p> 
            </div>  
          </div>
        </div>
      </div>
  
  </Container>
 
  <Container class1='special-wrapper py-5 home-wrapper-2'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='section-heading'>Special products</h2>
        </div>
      </div>
    <div className='row'>
      <SpecialProduct1 />
      <SpecialProduct />
      <SpecialProduct2 />
      
    </div>
  </Container>
  <Container class1=' popular-wrapper home.wrapper-2 py-5'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our popular products</h3>
        </div>
        <ProductCard />
        <ProductCard1 />
        <ProductCard2 />
        <ProductCard3 />
        
      </div>
   
  </Container>

  <Container>
   <Marquee className='filter-card-div-4'>
     <Marque />
   </Marquee>
  </Container>

  <Container class1=' blog-wrapper  home.wrapper-2 py-5'>
      <div className='row'>
        <div className='col-12'>
          <div className='section-heading'>Our Latest Blogs
          </div>
        </div>
        
        <BlogCard />
        <BlogCard1 />
        <BlogCard2 />
        <BlogCard3 />
        
        
      </div>
  </Container>
</section>

  </>
};

export default Home;

