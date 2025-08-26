import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:"250px",marginTop:'150px'}} className='mt-5 w-full bg-blue-600 text-white p-4'>
     <div className='flex justify-between p-4'>
      <div style={{width:'400px'}} className='intro'>
        <h5 className='text-xl font-bold'><i className="fa-solid fa-truck-fast "></i> E-cart</h5>
        <p>Designed and Built with all the love in the world by the lumianr team with the help of our contribution.</p>
        <p>code  licensed  luminar, doc cc by 3.0</p>
        <p>currently v5.3.2</p>
      </div>
      <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
         <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
      </div>
      <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Guides</h5>
        <a href="" style={{textDecoration:'none',color:'white'}}target='-blank'>React</a>
        <a href="" style={{textDecoration:'none',color:'white'}}target='-blank'>React bootstrap</a>
        <a href="" style={{textDecoration:'none',color:'white'}}target='-blank'>React Router</a>
      </div>
      <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Contact us</h5>
        <div className='flex'></div>
        <input type="text" placeholder='Enter your Email here..' className='rounded p-1'/>
        <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className='icons flex justify-between mt-3'>
        <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
         <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
      </div>
      </div> 
      <p  className='text-center mt-3 text-white'>copyright &copy; E-cart Built with react/rudux</p>
    </div>
    
  )
}

export default Footer