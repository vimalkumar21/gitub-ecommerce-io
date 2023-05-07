import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
// like this we will import imge in singleBlog.js
import opii from '../Components/images/opii.jpg';
import ipada11 from '../Components/images/ipada11.jpg';
import { AiTwotoneDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Container from '../Components/Container';

const Cart = () => {
    
  return (
    <>
      <section className='store-wrapper'>
       <Meta title={"Cart"}/>
       <BreadCrumb title='Cart'/>
        <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                           <h4 className='cart-col-1'>Ptoduct</h4>
                           <h4 className='cart-col-2'>Price</h4>
                           <h4 className='cart-col-3'>Quantity</h4>
                           <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className='cart-data1 mb-2 py-3 d-flex justify-content-between align-items-center'>
                           <div className='cart-col-1 d-flex align-items-center  gap-15'>
                            <div className='w-25 '>
                                <img src={opii} alt='' className='img-fluid'/>
                            </div>
                            <div className='w-75'>
                                <p>tilte</p>
                                <p>Size: M</p>
                                <p>Color: Gold</p>
                            </div>
                           </div>
                           <div className='cart-col-2'>
                            <h5 className='price'>$ 104</h5>
                           </div>
                           <div className='cart-col-3 d-flex gap-15 align-items-center'>
                            <div>
                             <input className='form-control' type='number' name='' id='' min={1} max={10} />
                           </div>
                           <div>
                           <Link to='' alt=''> <AiTwotoneDelete className='fs-2 import-icon-div'/></Link>
                           </div>
                          </div>
                           <div className='cart-col-4'>
                           <h5 className='price'>$ 104</h5>
                           </div>
                        </div>
                        <div className='cart-data1 mb-2 py-3 d-flex justify-content-between align-items-center'>
                           <div className='cart-col-1 d-flex align-items-center  gap-15'>
                            <div className='w-25 '>
                                <img src={ipada11} alt='' className='img-fluid'/>
                            </div>
                            <div className='w-75'>
                                <p>tilte</p>
                                <p>Size: L</p>
                                <p>Color: Black</p>
                            </div>
                           </div>
                           <div className='cart-col-2'>
                            <h5 className='price'>$ 140</h5>
                           </div>
                           <div className='cart-col-3 d-flex gap-15 align-items-center'>
                            <div>
                             <input className='form-control' type='number' name='' id='' min={1} max={10} />
                           </div>
                           <div>
                            <Link to='' alt=''> <AiTwotoneDelete className='fs-2 import-icon-div'/></Link>
                           </div>
                          </div>
                           <div className='cart-col-4'>
                           <h5 className='price'>$ 140</h5>
                           </div>
                        </div>
                    </div>
                    <div className='col-12 py-2 mt-4'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                            {/* here we are moving to home page with '/' */}
                          <Link to='/' className='button3'>Continue to shopping</Link>
                          <div className='d-flex flex-column align-items-end'>
                            <h4>Sub Total: 1000</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link to='/checkout'  className='button4'>Checkout</Link>
                          </div>
                        </div>
                    </div>
                </div>
            
        </Container>
       </section>
    </>
  )
}

export default Cart;
