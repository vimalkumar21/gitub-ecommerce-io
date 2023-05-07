import React from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom';
import ipada12 from '../Components/images/ipada12.jpg';
import spkrr from '../Components/images/spkrr.jpg';
import Container from '../Components/Container';

const Checkout = () => {
  return (
   <>
   <section className='store-wrapper'>
     <Container class1='ckeckout-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-7'>
                <div className='checkout-left-data'>
                    <h2 className='website-name pb-4'>Digitic</h2>
                    {/* the whole data inside nav we are using from bs-5 breadcrumb deviderse */}
                    <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                     <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/#">
                            <Link className='text-dark fs-5' to='/Cart'>Cart</Link>
                        </a>
                      </li>
                       &nbsp; /
                      <li className="breadcrumb-item active  " aria-current="page">Information</li>
                        &nbsp; /

                        <li className="breadcrumb-item active " aria-current="page">Shipping</li>
                        &nbsp; /
                         
                       <li className="breadcrumb-item active" aria-current="page">Payment</li>
                     </ol>
                    </nav>
                    <h4 className='title pb-3 total'>Contact-information</h4>
                    <p className='user-details pb-3 total'>Vimal kumar (vimal785@gmail.com)</p>
                    <h3 className='mb-4'>Shipping Address</h3>
                    <form action='' className='d-flex gap-30 flex-wrap justify-content-between'>
                      <div className='w-100'>
                        <select name='' className='form-control form-select input-div-1' id=''>
                            <option value='' selected disabled >Select Country</option>
                            <option value="1">India</option>
                            <option value="2">Japan</option>
                            <option value="3">America</option>
                            <option value="4">Argentina</option>
                            <option value="5">Gayana</option>
                            <option value="6">Myanmar</option>
                        </select>
                      </div>
                      <div className='w-100'>
                        <select name='' className='form-control form-select input-div-1' id=''>
                          <option value='' selected disabled >SelecT Reasion</option>
                            <option value="7">Delhi</option>
                            <option value="8">Uttar pradesh</option>
                            <option value="9">Punjab</option>
                            <option value="10">Madhya pradesh</option>
                            <option value="11">Maharastra</option>
                            <option value="12">Uttrakhand</option>
                        </select>
                      </div>
                      <div className='flex-grow-1'>
                        <input type='text' className='form-control input-div-1' placeholder='First name'/>
                      </div>
                      <div className='flex-grow-1'>
                        <input type='text' className='form-control input-div-1' placeholder='Last name'/> 
                      </div>
                      <div className='w-100'>
                        <input type='text' className='form-control input-div-1' placeholder='Address'/> 
                      </div>
                      <div className='w-100'>
                        <input type='text' className='form-control input-div-1' placeholder='Apartment, suit, etc, (ooptional)'/> 
                      </div>
                      <div className='flex-grow-1'>
                        <input type='text' className='form-control input-div-1' placeholder='City'/>
                      </div>
                      <div className='flex-grow-1'>
                      <select name='' className='form-control form-select input-div-1' id=''>
                        <option value='' selected disabled>Select State</option>
                        <option value="7">Delhi</option>
                            <option value="13">Uttar pradesh</option>
                            <option value="14">Punjab</option>
                            <option value="15">Madhya pradesh</option>
                            <option value="16">Maharastra</option>
                            <option value="17">Uttrakhand</option>
                      </select>
                      </div>
                      <div className='flex-grow-2'>
                        <input type='number' className='form-control input-div-1' placeholder='Zip Code'/> 
                      </div>
                      <div className='cancle-div-1'>
                      <Link to='/Cart' className='mb-0 text-dark'><MdOutlineArrowBackIos  className='fs-5 gap-10 mb-0'/> Return to cart</Link>
                      </div>
                      {/* here we are moving it home page to more shop with the help of '/' */}

                      {/* NOTE here we will make our payment page with link Continue to shIpping in future */}
                      <Link to='/' className='button4 signup '>Continue to shIpping</Link>
                    </form>
                </div>
            </div>
            <div className='col-5 filter-card-div-1'>
              <div className=' py-4 filter-card-div-2 total-div-div-3'>
               <div className='d-flex mb-4  align-items-center gap-15 filter-card-div-2 '>
               <div className='w-100 d-flex gap-10'>
                <div className='w-25 position-relative '>
                  <span style={{
                    top: '-10px', right:'2px'}} className='badge bg-secondary rounded-circle text-white p-2 position-absolute'>1</span>
                  <img src={ipada12} alt='speeker' className='img-fluid'/>
                </div>
                <div className=''>
                  <h5 className='total mb-2 '>boAt Airdopes Earbuds with mic, 42H Playtime</h5>
                  <p className='total-price'>25% discount </p>
                </div>
               </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>$-110</h5>
                </div>
                </div>
                <div className='d-flex mb-2  align-items-center gap-15 filter-card-div-2'>
               <div className='w-100 d-flex gap-10'>
                <div className='w-25 position-relative '>
                  <span style={{
                    top: '-10px', right:'2px'}} className='badge bg-secondary rounded-circle text-white p-2 position-absolute'>1</span>
                  <img src={spkrr} alt='speeker' className='img-fluid'/>
                </div>
                <div>
                  <h5 className='total mb-2'>Bluetooth speeker for home and boys bulk speekers</h5>
                  <p className='total-price'>50% discount </p>
                </div>
               </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>$-75</h5>
                </div>
                </div>
              </div>
              <div className='filter-card-div-2 py-4 total-div-div-1 total-div-div-3'>
                <div className='d-flex justify-content-between align-items-center filter-card-div-2 py-2 total-div-div-2 total-div-div-3'>
                  <p className='total'>SubTotal</p>
                  <p className='total-price'>$ 100000</p>
                </div>
                <div className='d-flex justify-content-between align-items-center filter-card-div-2 py-3 total-div-div-2 total-div-div-3'>
                  <p className='mb-0 total'>Shipping</p>
                  <p className='mb-0 total-price'>$ 100000</p>
                </div>
              </div>
              <div className='d-flex justify-content-between align-item-center filter-card-div-2 py-4 total-div-div-1 total-div-div-3 '>
                  <h4 className='total'>Total</h4>
                  <h5 className='total-price'>$ 100000</h5>
                </div>
            </div>
        </div>
      </Container>
  </section>
   </>
  );
}

export default Checkout;
