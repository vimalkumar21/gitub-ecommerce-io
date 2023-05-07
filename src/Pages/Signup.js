import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import Custuminput from '../Components/Custuminput';

const Signup = () => {
  return (
    <>
     <section className='wislist-wrapper'>
      <Meta title={"Signup"}/>
       <BreadCrumb title='Signup'/>
        <Container class1='login-wrapper home-wrapper-2 py-5'>
       
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h4 className='text-center '>Create your account</h4>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div className='mb-0 mt-2'>
                             <Custuminput  className='form-control input-div-1' type='text' name='name' placeholder='enter your name' required />
                             <Custuminput className='form-control mb-2 input-div-1' type='tel' name='mobile' placeholder='enter your number' required />
                             <Custuminput className='form-control mb-2 input-div-1' type='tel' name='email'  placeholder= 'enter your email' required />
                             <Custuminput className='form-control mb-2 input-div-1' type='password' name='password' placeholder='set your paassword' required />
                             </div>
                            <div className=''>
                                <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                    <button to='/SignUp' className='button2 signup'>Signup</button>
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

export default Signup;
// className='form-control mb-2'