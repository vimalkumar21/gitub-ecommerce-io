import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import Custuminput from '../Components/Custuminput';


const Forgotpassword = () => {
  return (
    <>
    <section className='wislist-wrapper'>
      <Meta title={"Forgot password"}/>
      <BreadCrumb title='Forgot password'/>
      <Container class1='login-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card '>
                        <h3 className='text-center mb-3'>Reset password</h3>
                        <p className='text-center mb-3 mt-0'>we will send you an email to reset your password</p>
                        <form action='' className='d-flex flex-column gap-15'>
                        <Custuminput type='email'className='form-control input-div-1 text-dark mb-0' name='email' placeholder='enter your email' required />
                           
                            <div className=''>
                                
                                <div className='d-flex justify-content-center gap-15  align-items-center mt-3 text-dark'>
                                    <Link className='signup button2' to='/Reset-password' type='submit'>Submit</Link>
                                    <Link className='text-dark cancle-div-1' to='/Log-in-Account'>cancle</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
      </section>
    </>
  );
};

export default Forgotpassword;
