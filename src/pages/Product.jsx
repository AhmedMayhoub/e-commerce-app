import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopApp"
import { useParams } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"
import RelatedProduct from "../components/RelatedProduct"

const Product = () => {

  const { products, addToCart } = useContext(ShopContext)
  const { productId } = useParams()
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [sizes , setSizes] = useState('')

  
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  },[products , productId])


  return productData ? (
    <div className="pt-10 opacity-100 transition-opacity duration-500 ">
      <div  className="flex flex-col sm:flex-row sm:gap-6 gap-0  ">
        {/* -------------product image------------- */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row sm:gap-4 ">
        <div className="flex sm:flex-col gap-2 mt-4 sm:mt-0 sm:w-[18.7%] overflow-x-auto sm:overflow-y-scroll sm:h-[450px] ">
          {
            productData.image.map((item, index) => (
              <img key={index} onClick={() => setImage(item)} src={item} className=" sm:mb-2 max-h-[24%] w-[26%] sm:w-full cursor-pointer " alt="" />
            ))
          }
        </div>
        {/* --------- main image-------------- */}
          <div className=" w-full sm:w-[80%] ">
            <img src={image} alt="" className="w-full h-[400px] "/>
          </div>
        </div>
        {/* ------------- product information-------- */}

        <div className="flex-1 flex flex-col mt-10 sm:mt-0 ">
          <h1 className="text-gray-500 font-semibold text-[24px] ">{productData.name}</h1> 
          <div className="flex gap-2 mt-4 ">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
          </div>
          <p className="mt-10 text-gray-500 font-semibold max-w-[450px]">{productData.description}</p>
          {/* -----------sizes-------------- */}
          <div className="mt-6 flex flex-col gap-4">
            <h1 className="text-gray-600 font-bold">Sizes</h1>
            <div className="flex gap-2">
              {
                productData.sizes.map((item, index) => (
                  <button key={index} onClick={()=>setSizes(item)} className={`bg-gray-100 px-3 py-1 cursor-pointer rounded-md ${item === sizes ? "bg-gray-900 text-white" : ""}`}>{item}</button>
                ))
              }
            </div>
            <button onClick={()=> addToCart(productData._id , sizes)} className="py-2 px-5 bg-black text-white w-1/2 mt-6 active:bg-gray-700 cursor-pointer">Add To Cart</button>
            <div className=" border border-gray-500 p-4 shadow-md">
              <p className="text-gray-500 font-medium ">  100% original product</p>
              <p className="text-gray-500 font-medium ">  policy of refund its very fixable and easy way </p>
            </div>
         </div>
        </div>
      
   
      </div>
      {/* -------- description--------- */}

      <div className="flex flex-col gap-2 mt-10">
        <div className=" flex items-center gap-2">
            <p className="px-5 py-1 border border-gray-500 bg-gray-100">Related</p>
            <p className="px-5 py-1 border border-gray-500 bg-gray-100">Description</p>
        </div>
        <div className="border border-gray-500 w-full sm:w-3/4 p-4">
          <p className="max-w-[750px] text-gray-500 text-semibold">Discover items that complement your selection! Our curated list of related products ensures you find everything you need in one place.
            From matching accessories to complementary essentials, browse options tailored to enhance your shopping experience.</p>
        </div>
      </div>

      {/* ---------- related product ---------------- */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
     
    </div>
  ) : <div className="opacity-0">
      
  </div>
}

export default Product