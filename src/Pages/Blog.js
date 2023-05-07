import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import BlogCard from '../Components/BlogCard';
import Container from '../Components/Container';
import BlogCard1 from '../Components/BlogCard1';
import BlogCard2 from '../Components/BlogCard2';
import BlogCard3 from '../Components/BlogCard3';

const Blog = () => {
  return ( <>
    <section className='store-wrapper'>
       <Meta title={"Blog"}/>
     <BreadCrumb title='Blog' />
     <Container class1='store-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-3'>
                <div className='filter-card filter-card-div-3 mb-3'>
              <h3 className='filter-title'>Find By Categuries</h3>
              <div className='filter-pa ps-0 mt-4'>
               <p>Home</p>
               <p>Our Store</p>
               <p>Blogs</p>
               <p>Contact</p>
              </div>
            </div>
                </div>
                
              <div className='col-9'>
                <div className='row'>
                  <div className='col-12 d-flex gap-10'>
                  <BlogCard />
                  <BlogCard1 />
                  <BlogCard2 />
                  <BlogCard3 />
                  </div>
                  
                   
                </div>

              </div>
            </div>
        
     </Container>
     </section>
   </>
  );
};

export default Blog;
