import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import ProductCard1 from '../Components/ProductCard1';
import ProductCard2 from '../Components/ProductCard2';
import ProductCard3 from '../Components/ProductCard3';
import ReactStars from "react-rating-stars-component";
import { DiGitCompare } from 'react-icons/di'
import  { BsSuitHeart } from 'react-icons/bs'
// here we have imported reactimagezoom from its library
import ReactImageZoom from 'react-image-zoom';
import { useState } from 'react';
import Container from '../Components/Container';

// we have trinying to implement it again
const SingleProduct = () => {
  // here we are using images link from google
  const props = {width: 600, height: 500, zoomWidth: 500, img: "https://images-na.ssl-images-amazon.com/images/I/91JB4K6975L._AC_SL1500_.jpg" };
  const [orderedProduct, setorderProduct] = useState(true);
  return (
    <>
    <section className='store-wrapper'>
      <Meta title={"single product"}/>
      <BreadCrumb title='single product'/>
      
       <Container class1='main-product-wrapper py-5 home-wrapper-2'>
          <div className='row'>
           
            <div className='col-6 py-5'>
             <div className='main-product-image '>
              <div>
                {/* here we are using imagezoom from react image zoom library */}
               <ReactImageZoom {...props} />
              </div>
             </div>
             <div className='other-product-images d-flex flex-wrap gap-15 py-2'>
              {/* here we used img link from google */}
              <div> 
                <img src='https://th.bing.com/th?id=OIP.YD6l4etU0KqrskygXGJDDwHaHa&w=250&h=250&c=8&rs=1&  qlt=90&o=6&pid=3.1&rm=2' alt='google link' className='img-fluid'/>
              </div>
              <div>
                <img src='https://th.bing.com/th?id=OIP.INSUYMXJ4gjd5__MM2j4HwHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt='google link' className='img-fluid'/>
              </div>
              <div>
                <img src='https://th.bing.com/th/id/OIP.o7TLQKijfJMuyHi_xZ56LgHaHa?w=214&h=213&c=7&r=0&o=5&pid=1.7' alt='google link' className='img-fluid'/>
              </div>
              <div>
                <img src='https://th.bing.com/th?id=OIP.YD6l4etU0KqrskygXGJDDwHaHa&w=250&h=250&c=8&rs=1&  qlt=90&o=6&pid=3.1&rm=2' alt='google link' className='img-fluid'/>
              </div>
             </div>
            </div> 
            <div className='col-6 py-5'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h5 className='title'>youngsters watch bulk 10 pack multicolored for main's</h5>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100</p>
                  <div className='d-flex align-items-center gap-10'>
                  <ReactStars
                     count={5}
                     size={24}
                     value="3"
                     edit={false}
                    activeColor="#ffd700" />
                    <p className='review-btns mb-0'>(2 reviews)</p>
                  </div>
                  <a className='review-btn' href='#review'>write a review</a>
                </div>
                <div className='border-bottom py-3'>
                  <div className='d-flex align-items-center mt-2 gap-10'>
                    <h4 className='product-heading-data'>Type :</h4>
                     <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-10'>
                    <h4 className='product-heading-data'>Brand :</h4> 
                     <p className='product-data'>Havells</p>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-10'>
                    <h4 className='product-heading-data'>Category :</h4> 
                     <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-10'>
                    <h4 className='product-heading-data'>Tags :</h4>
                     <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-10'>
                    <h4 className='product-heading-data'>Availability :</h4>
                     <p className='product-data'>In-Stock</p>
                  </div>
                  <div className='d-flex gap-10 mt-2'>
                    <h4 className='product-heading-data'>Size :</h4>
                    
                    <div className='form-check mt-0'>
                      <input className='form-check-input' type="checkbox" value="" id='color-1'/>
                      <lable className="form-chech-leble " htmlFor="color-1">S</lable>
                     </div>
                     <div className='form-check mt-0'>
                     <input className='form-check-input' type="checkbox" value="" id='color-1'/>
                     <lable className="form-chech-leble " htmlFor="color-1">M</lable>
                    </div>
                    <div className='form-check mt-0'>
                     <input className='form-check-input' type="checkbox" value="" id='color-1'/>
                     <lable className="form-chech-leble " htmlFor="color-1">xl</lable>
                    </div>
                    <div className='form-check mt-0'>
                     <input className='form-check-input' type="checkbox" value="" id='color-1'/>
                     <lable className="form-chech-leble " htmlFor="color-1">xxl</lable>
                    </div>
                  </div>
                  <div className='d-flex flex-column mt-2 gap-10'>
                    <h4 className='product-heading-data'>Color :</h4>
                    <div>
                 <ul  className='colors ps-0'>
                  <li className='liscoler'></li>
                  <li className='liscoler1'></li>
                  <li className='liscoler2'></li>
                  <li></li>
                 </ul>
              </div>
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-row mt-1 mb-3 gap-10'>
                    <h4 className='product-heading-data'>Quantity :</h4>
                     <div className=''>
                      <input type='number'name='nnumber of item' className='form-control' id='' min={1} max={10} style={{width: '70px'}} />
                     </div>
                     <div className='d-flex align-items-center gap-30 ms-5'>
                       <button className='button3' type='submit'>Add To Cart</button>
                       <button className='button3 signup'>Buy Now</button>
                     </div>
                  </div>
                  <div className='d-flex align-items-center gap-30'>
                   <div>
                     <a  href=''><DiGitCompare className='fs-5 me-2' /> Add To Compare</a>
                   </div>
                   <div>
                     <a href=''><BsSuitHeart className='fs-5 me-2' /> Add To Wishlist</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>  
      
       </Container>
       <Container class1='description-wrapper py-5 home-wrapper-2'>

          <div className='row'> 
            <div className='col-12'>
            <h4>Description</h4>
             <div className='review-inner-wrapper p-3'>
              <p>
                Daniel Wellington Classic Analog Black Dial Women's Watch - DW00100150
                <p>If this product is sold by Amazon, please review the manufacturer’s website for warranty information. If this product is sold by another party, please contact the seller directly for warranty information for this product. You may also be able to find warranty information on the manufacturer’s website.</p>
              </p>
             </div>
            </div>
          </div>
       
        </Container>
        <Container class1='reviews-wrapper py-5 home-wrapper-2'>
       
          <div className='row'>
            {/* here we are used review id because by clicking on write review form 2nd col-6 then it will redirect us to 1st col-6 to write a review we have used there #review to target it  */}
            <div id='review' className='col-12'>
              <h3 >Reviews</h3>
             <div className='review-inner-wrapper'>
             <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Costumer Reviews</h4>
                  <div className='d-flex align-items-center gap-15'>
                    <ReactStars
                     count={5}
                     size={24}
                     value="3"
                     edit={false}
                    activeColor="#ffd700" />
                    <p className='mb-0'>Based on 2 reviews</p>
                  </div>
                </div>
                 {
                  orderedProduct && (
                  <div>
                    <a className='text-dark text-decoration-underline' href='#vimal'>Write A Review</a>
                  </div>
                  )
                 }
              </div>
              <div className='review-form py-4'>
                <>
                <br />
                <h4>Write a review</h4>
                <form action='' className='-d-flex flex-column '>
                 
               <div>
               <ReactStars
                     count={5}
                     size={24}
                     value="3"
                     edit={true}
                    activeColor="#ffd700" />
                 {/* here we can see a error because we are using double id in sdame fields but it it working */}
               <textarea name='' type = 'text' className='w-100 form-control ' id='dcme'  cols='30' rows='10'   placeholder='drop your  comments'> </textarea>
              </div>
            <div className='d-flex justify-content-end'>
            <button className='button4 border-0'>Submit Review</button>
            </div>
          </form>
                </>
              </div>
              <div className='reviews mt-5'>
                <div className='review'>
                 <div className='d-flex align-items-center gap-10'>
                  <h6 className='mb-0'>vimal kumar</h6>
                  <ReactStars
                     count={5}
                     size={24}
                     value="3"
                     edit={false}
                    activeColor="#ffd700" />
                 </div>
                     <h3>
                       Special offers and product promotions</h3>
                    <p className='mt-3'>10% Instant Discount up to INR 300 on OneCard Credit Card Trxns. Minimum purchase value INR 1500 Here's how</p>
                    <p>5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000 Here's how</p>
                    <p> No cost EMI available on select cards. Please check 'EMI options' above for more details. Here's how</p>
                    <p>Get GST invoice and save up to 28% on business purchases.</p>
                </div>
              </div>
             </div>
            </div>
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
         </section> 
    </>
  );
};

export default SingleProduct;
