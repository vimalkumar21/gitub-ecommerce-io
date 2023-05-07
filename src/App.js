import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import Compareproduct from './Pages/Compareproduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermAndCondition from './Pages/TermAndCondition';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
// counter file are avaible in bin check if that is need in future 

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path = "/" element={<Layout />}>
      <Route index element = {<Home />} />
      <Route path="about" element = {<About />} />
      <Route path="contact" element = {<Contact />} />
      {/* we are used here Product insted of store v length 6:45 */}
      {/* 1st */}
      <Route path="store" element = {<OurStore />} />
      <Route path="store/product/:id" element = {<SingleProduct />} />

      <Route path="Blog" element = {<Blog />} />
      {/* need to check again blog:id img is not working  */}
      <Route path="Blog/:id" element = {<SingleBlog />} />
      <Route path="Cart" element = {<Cart />} />
      <Route path="Compare-product" element = {<Compareproduct />} />
      <Route path="Favourate-Wish List" element = {<Wishlist />} />
      <Route path="Log-in-Account" element = {<Login />} />
      <Route path="forgot-password" element = {<Forgotpassword />} />
      <Route path="Sign-Up" element = {<Signup />} />
      <Route path="Reset-password" element = {<Resetpassword />} />
      <Route path="Privacy-Policy" element = {<PrivacyPolicy />} />
      <Route path="Refund-Policy" element = {<RefundPolicy />} />
      <Route path="Shipping-Policy" element = {<ShippingPolicy />} />
      <Route path="Term-And-Condition" element = {<TermAndCondition />} />
      <Route path="checkout" element = {<Checkout />} />
      
      
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;