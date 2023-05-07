import React from 'react'

const Container = (props) => {
  return (
    <section className='props.class1 py-5'>
      {/* children must be in small letters */}
        <div className='container-xl'>{props.children}</div>
    </section>
    
  );
};

export default Container;
