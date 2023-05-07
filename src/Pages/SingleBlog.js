import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import { TfiArrowLeft } from 'react-icons/tfi';
// work letter on this 8:07
import spkrr from '../Components/images/spkrr.jpg';
import ipada4 from '../Components/images/ipada4.jpg';


const SingleBlog = () => {
  return (
    <>
     <section className='store-wrapper'>
      <Meta title={"dyanamic Singleblog"}/>
      <BreadCrumb title='dyanamic Singleblog'/>
      < div className=' home-wrapper-2 py-5'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-6'>
                    <div className='single-blog-card-site-si'>
                     <Link className='mb-4 lnks align-items-center d-flex gap-10' to='/Blog'><TfiArrowLeft />Go To Blog</Link>  

                    <h3 className='lnk title text-dark'>A Beautiful Sunday Morning Renaissanse</h3>
                     {/* <img src='images/spkr23.jpg' className='text-white img-fluid w-100 my-4' alt='asdjnfkls' /> */}
                     <img src={spkrr}  className='text-white img-fluid w-100 my-4 main-div-1 main-1-div' alt='asdjnfkls' />
                     <div className='review-inner-wrapper'>
                      <p className='text-dark'>you are only as good as your last collection which is an enormous pressure i think there is somthong about luxary it is not something peuple needs but it what they want. it really pullse at there heart i have a fantastic relationship with mone 
                      </p>
                     </div>
                    </div>
                    
                </div>
                <div className='col-6'>
                    <div className='single-blog-card-site-si'>
                     <Link className='mb-4 lnks align-items-center d-flex gap-10' to='/Blog'><TfiArrowLeft />Go To Blog</Link>  

                    <h3 className='lnk title text-dark'>A Beautiful Sunday Morning Renaissanse</h3>
                     {/* <img src='images/spkr23.jpg' className='text-white img-fluid w-100 my-4' alt='asdjnfkls' /> */}
                     <img src={ipada4}  className='text-white img-fluid w-100 my-4 main-div-1 main-1-div' alt='asdjnfkls' />
                     <div className='review-inner-wrapper'>
                      <p className='text-dark'>you are only as good as your last collection which is an enormous pressure i think there is somthong about luxary it is not something peuple needs but it what they want. it really pullse at there heart i have a fantastic relationship with mone 
                      </p>
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

export default SingleBlog;
