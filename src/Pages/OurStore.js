import React, { useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../Components/ProductCard';
import ProductCard1 from '../Components/ProductCard1';
import ProductCard3 from '../Components/ProductCard3';
import ProductCard2 from '../Components/ProductCard2';



const OurStore = () => {
  const [grid, setgrid]=useState(4);
 
  return ( 
  <> 
   <section className='store-wrapper'>
     <Meta title={"Our Store"}/>
     <BreadCrumb title='Our Stor' />
     {/* we will put it under container  after some time*/}
     <div className='store-wrapper home-wrapper-2 py-5'>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-3 mb-3'>
            <div className='filter-card mb-3 main-div-2'>
              <h3 className='filter-title'>Shop By Categuries</h3>
              <div className='filter-pa ps-0 mt-4'>
               <p>Home</p>
               <p>Our Store</p>
               <p>Blogs</p>
               <p>Contact</p>
              </div>
            </div>
            <div className='filter-card'>
            <h3 className='filter-title'>Filter By</h3>
            <div>
            </div>
            <h5 className=' sub-title'>Availablity</h5>
            <div>
            <div className='form-check'>
              <input className='form-check-input' type="checkbox" value="" id=''/>
              <lable className="form-chech-leble " htmlFor="">In Stock (1)</lable>
            </div>
            <div className='form-check'>
              <input className='form-check-input' type="checkbox" value="" id=''/>
              <lable className="form-chech-leble" htmlFor="">In Stock (0)</lable>
            </div>
            </div>
            <h6 className='text-dark mt-3'>Price</h6>
            <div className='d-flex align-items-center gap-10'>
            <div className="form-floating mb-3">
              <input type="email" className="form-control py-1" id="floatingInput"  placeholder="From" />
               <label htmlFor="floatingInput">From</label>

               </div>
               <div className="form-floating mb-3">
              <input type="email" className="form-control py-1" id="floatingInput" placeholder="To" />
               <label htmlFor="floatingInput">To</label>
               </div>
               </div>
              <h6 className='text-dark mt-3'>Colors</h6>
              <div>
                 <ul  className='colors ps-0'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                 </ul>
              </div>
              <div>
                 <ul  className='colors ps-0'>
                  <li className='liest'></li>
                  <li className='liest'></li>
                  <li className='liest'></li>
                  <li className='liest'></li>
                  <li className='liest'></li>
                  <li className='liest'></li>
                  <li className='liest'></li>
                  <li className='liest'></li>
                  
                 </ul>
              </div>
              <h6 className='text-dark mt-3'>Size</h6>
              <div>
              <div className='form-check mt-2'>
              <input className='form-check-input' type="checkbox" value="" id='color-1'/>
              <lable className="form-chech-leble " htmlFor="color-1">S (2)</lable>
            </div>
              </div>
              <div>
              <div className='form-check mt-2'>
              <input className='form-check-input' type="checkbox" value="" id='color-2'/>
              <lable className="form-chech-leble " htmlFor="color-2">M (2)</lable>
            </div>
              </div>
              <div>
              <div className='form-check mt-2'>
              <input className='form-check-input' type="checkbox" value="" id='color-3'/>
              <lable className="form-chech-leble " htmlFor="color-3">l (0)</lable>
            </div>
              </div>
              <div>
              <div className='form-check mt-2'>
              <input className='form-check-input' type="checkbox" value="" id='color-4'/>
              <lable className="form-chech-leble " htmlFor="color-4">Xl (0)</lable>
            </div>
              </div>
              <div>
              <div className='form-check mt-2'>
              <input className='form-check-input' type="checkbox" value="" id='color-5'/>
              <lable className="form-chech-leble " htmlFor="color-5">Xxl (0)</lable>
            </div>
              </div>
            </div>
            <div className='filter-card'>
            <h3 className='filter-title'>Product Tages</h3>
            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
              <span className='badge bg-light text-secondary rounded-3 py-2 mt-2 px-3'>Headphone</span>
               <span className='badge bg-light text-secondary rounded-3 py-2 px-3 mt-2'>Laptop</span>
              <span className='badge bg-light text-secondary rounded-3 py-2 px-3 mt-2'>Mobile</span>
              <span className='badge bg-light text-secondary rounded-3 py-2 px-3 mt-2'>Wire</span>
              <span className='badge bg-light text-secondary rounded-3 py-2 px-3 mt-2'>Watch</span>
            </div>
            </div>
            <div className='filter-card'>
            <h3 className='filter-title'>Random Product</h3>
            
            <div className='random-product d-flex'>
             <div className='w-50 pl-0'>
              <img className='imagess img-fluid' src='images/opi1.jpg' alt='watch' />
             </div>
             <div className='w-20 px-2'>
              <h6>Kids Headphones Bulk 10 Pack Multicolord For Student</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
                 />
                 <b>$200</b> <hr />
                 
                </div>
                
            </div>
            <div className='random-product d-flex mt-3'>
             <div className='w-50 pl-0'>
              <img className='imagess img-fluid' src='images/cm1.jfif' alt='watch' />
             </div>
             <div className='w-20 px-2'>
              <h6>Camers Bulk 10 Pack Multicolord For Turisem</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
                 />
                 <b>$400</b> 
                 
                </div>
                
            </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mt-3 mb-4 filter-card-div-2'>
              <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-10'>
                <p className='mb-0'>Sort By:</p>
                {/* select are imported from bootstrap 5 */}
                <select class="form-select" aria-label="Default select example">
                  <option selected className=''>Best Selling</option>
                   <option value="1">Featured</option>
                   <option value="2">Alphbetically: A-Z</option>
                   <option value="3">Alphbetically: Z-A</option>
                   <option value="4">Price, Low to High</option>
                   <option value="5">Price, High to Low</option>
                   <option value="6">Date, old to new</option>
                   <option value="7">Date, new to old</option>
                   </select>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <p className='total-products mb-0' style={{width: "100px"}}>Total item: 21</p>
                <div className='d-flex flex-wrap align-items-center gap-10 grid'>
                  {/* need to set bg color of icons */}
                  {/* here we are using useState hook in img tag */}
                 
                  <img onClick={()=>{setgrid(2)}} className=' d-block img-fluid sen' src='images/horizontalline.jfif' alt='grid' />
                  <img onClick={()=>{setgrid(3)}}  className='d-block img-fluid sen' src='images/horizontalline.jfif' alt='grid' />
                  <img onClick={()=>{setgrid(6)}}  className='d-block img-fluid sen ' src='images/horizontalline.jfif' alt='grid' />
                  <img onClick={()=>{setgrid(8)}}  className='d-block img-fluid sen' src='images/vrtcl.jfif' alt='grid' />
                </div>
              </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              {/* here we are calling productcard in grid which is hook property */}
             <div className='d-flex gap-10 flex-wrap'> 
              <ProductCard grid={grid} />
              <ProductCard1 grid={grid} />
              <ProductCard2 grid={grid} />
              <ProductCard3 grid={grid} />
              
              
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

export default OurStore;

  