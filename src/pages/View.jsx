import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'

const View = () => {
  const dispatch = useDispatch()
  const userWishlist= useSelector(state=>state.wishlistReducer)


  const [product,setProduct] = useState({})

  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state=>state.productReducer)
  console.log(allProducts);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      // console.log(allProducts.find(item=>item.id==id))
      setProduct(allProducts.find(item=>item.id==id))
      
    }
    
  },[])

  console.log(product);
  const handleWishlist=()=>{
    const existingWishlist = userWishlist?.find(item=>item?.id==id)
    if(existingWishlist){
      alert("Product Already Existing in wishlist")
    }else{
      dispatch(addToWishlist(product))
      alert("Product added to wishlist")
    }

  }
  
  
  

  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={"350px"} height={"250px"} src={product?.thumbnail} alt="" />

          <div>
            <h3 className='font-bold'>{product?.id}</h3>
            <h3 className='text-5xl font-bold'>{product?.title}</h3>
            <h3 className='font-bold text-red-500 text-2xl'>{product?.price}</h3>
            <h3 >{product?.brand}</h3>
            <h3>{product?.category}</h3>
            <p>
              <span className='font-bold'>Description</span>:
           {product?.description} </p>

            <div className='flex justify-between mt-5'>
              <button onClick={handleWishlist} className='bg-blue-700 rounded text-white p-2'>ADD TO WISHLIST</button>
              <button className='bg-blue-700 rounded text-white p-2'>ADD TO CART</button>

            </div>
          </div>
          

        </div>

      </div>
    </>
  )
}

export default View