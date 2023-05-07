import React from 'react'

const Custuminput = (props) => {
    const { type, name, placeholder, className } = props
  return (
    <div>
    <input 
    type={type} 
    name={name} 
    className={` form-control mb-3 ${className}` } 
    placeholder={placeholder} 
     />
  </div>
  );
}

export default Custuminput;
