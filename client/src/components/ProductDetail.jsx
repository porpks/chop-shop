/* eslint-disable react/prop-types */
import { context } from '../contexts/AppContext'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ProductDetail() {
    const params = useParams()
    const { apiEndpoint, hadleStars, cart, setCart } = context()
    const [product, setProduct] = useState({})
    const [images, setImages] = useState([])
    const [indexs, setIndexs] = useState(0)
    const getProduct = async () => {
        try {
            const result = await axios.get(`${apiEndpoint}/product/${params.productId}`)
            setProduct(result.data.data)
            setImages(result.data.data.images)
        } catch (error) {
            alert(error)
        }
    }

    const handleSlide = (action) => {
        if (action === "next") {
            if (indexs < images.length - 1) {
                setIndexs(indexs + 1)
            } else {
                setIndexs(0)
            }
        }
        if (action === "prev") {
            if (indexs > 0) {
                setIndexs(indexs - 1)
            } else {
                setIndexs(images.length - 1)
            }
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
    let showStar = hadleStars(product.rating)
    console.log(images);
    return (
        <div className='px-48 pt-12'>

            <div className='flex px-2 w-full h-[500px] shadow-xl'>
                {/* image box */}
                <div className='flex items-center w-2/5 relative'>
                    <button className='bg-black text-white text-xl w-5 border border-slate-500 active:bg-white active:text-black rounded absolute z-10 left-0'
                        onClick={() => handleSlide("prev")}>
                        {'<'}
                    </button>
                    <div className='flex justify-center items-center h-3/4 p-4 overflow-hidden'>
                        <img src={images[indexs]}
                            className='max-w-full max-h-full duration-700 ease-in-out' />
                    </div>
                    <button className='bg-black text-white text-xl w-5 border border-slate-500 active:bg-white active:text-black rounded absolute z-10 right-0'
                        onClick={() => handleSlide("next")}>
                        {'>'}
                    </button>
                </div>

                {/* detail box */}
                <div className='flex flex-col w-3/5 p-10'>
                    <div className='flex items-center'>
                        <h1 className='text-4xl font-semibold'>
                            {product.title}
                        </h1>
                        {product.discountPercentage ?
                            <h1 className='ml-3 bg-red-600 text-white  px-2'>
                                -{product.discountPercentage}%
                            </h1> :
                            null
                        }
                    </div>
                    <h1 className='my-4 text-lg'>
                        {product.description}
                    </h1>
                    <h1>
                        Brand: {product.brand}
                    </h1>
                    <h1>
                        Category: {product.category}
                    </h1>

                    <div className='flex items-center text-2xl mt-4'>
                        <i className={showStar[0]}></i>
                        <i className={showStar[1]}></i>
                        <i className={showStar[2]}></i>
                        <i className={showStar[3]}></i>
                        <i className={showStar[4]}></i>
                        <h1 className='ml-1 text-gray-500'>
                            {product.rating}
                        </h1>
                    </div>

                    {product.discountPercentage ?
                        <div className='mt-6'>
                            <h1 className='text-gray-400 text-lg line-through'>
                                ${product.price}
                            </h1>
                            <h1 className='text-3xl font-semibold'>
                                ${(product.price * (100 - product.discountPercentage) / 100).toFixed(2)}
                            </h1>
                        </div> :
                        <div className='mt-8'>
                            <h1 className='text-3xl font-semibold'>
                                ${product.price}
                            </h1>
                        </div>
                    }
                    <button className=' bg-black w-96 mt-4 p-2 text-white text-lg rounded active:text-gray-400 active:scale-95'
                        onClick={() => { setCart((prevCart) => [...prevCart, product]) }}>
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}
export default ProductDetail