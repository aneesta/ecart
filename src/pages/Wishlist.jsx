import React, { use } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'


const Wishlist = () => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.WishlistReducer)
  return (
    <>
    <Header/>
    <div style={{paddingTop:"100px"}} className='px-5'>
      { userWishlist?.length>0
}
      
      
          <>
              <h1 className='text-5xl text-red-800'>Whishlist</h1>
               <div className='grid grid-cols-4 gap-4'>
              <div className='rounded border '>
                  <img width={"100%"} height={"200px"} src="https://opsg-img-cdn-gl.heytapimg.com/epb/202303/27/obO2kJ7YNs3jTGQk.jpeg" alt="" />
                  <div className='text-center'>
                      <h3 className='text-xl font-bold' >tiltle</h3>
                   <div className='flex justify-evenly mt-3'> 
                      <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                                          <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-500"></i></button>
  
                   </div>
                  </div>
  
              </div>
  
          </div>
          </>
       
    </div>
    
    </>
  )
}
export default  Wishlist