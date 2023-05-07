import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Custuminput from '../Components/Custuminput';

const Resetpassword = () => {
  return (
    <>
      <section className='wislist-wrapper'>
       <Meta title={"Reset password"}/>
       <BreadCrumb title='Reset password'/>
       <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card '>
                        <h3 className='text-center mb-3'>Reset your password</h3>
                        <p className='text-center mb-3 mt-0 '>we will send you an email to reset your password</p>
                        <form action='' className='d-flex flex-column gap-15'>
                            <Custuminput type='password' className='input-div-1' name='password' placeholder='enter your password' required />
                          
                            
                                <Custuminput type='password' className='input-div-1' name='confirm-password'  required placeholder='confirm your password'/>
                        
                            <div className=''>
                                
                                <div className='d-flex justify-content-center gap-30  align-items-center mt-3'>
                                    <button className='button2 signup' type='submit'>done</button>
                                    <Link className='text-dark cancle-div-1' to='/forgot-password'>cancle</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>    
    </section> 
    </>
  );
};

export default Resetpassword;

//  <div className='mb-3'>
// <input type='password' name='password' className='form-control' placeholder='enter your password' required />
// </div>