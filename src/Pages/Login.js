import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import Custuminput from '../Components/Custuminput';

const Login = () => {
  return (
    <>
      <section className='wislist-wrapper'>
       <Meta title={"Log in-Account"}/>
       <BreadCrumb title='Log in-Account'/>
        <Container class1='login-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3>Login</h3>
                        <form action='' className='d-flex flex-column gap-15 mt-4'>
                            <Custuminput type='email'className='form-control input-div-1 text-dark mb-0' name='email' placeholder='enter your email' required />
                            
                                <Custuminput type='password' className='form-control input-div-1 text-dark mb-0' name='password' required placeholder='enter your password'/>
                        
                            <div className=''>
                                <Link className='text-dark pass-div-1' to='/forgot-password '>forgot-password ?</Link>
                                <div className='d-flex justify-content-center gap-30 align-items-center mt-3'>
                                    <button className='button2 button-div' type='submit'>Login</button>
                                    <Link to='/Sign-Up' className='button2 signup'>Signup</Link>
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

export default Login;
