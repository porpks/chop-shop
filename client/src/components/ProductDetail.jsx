import data from '../data.json'
import { useState } from 'react'

function ProductDetail(props) {
    // eslint-disable-next-line react/prop-types
    const product = data[props.productId - 1]
    const [imageIndex, setImageIndex] = useState(0)

    const handlePrevImage = () => {
        if (imageIndex === 0) {
            setImageIndex(product.images.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }
    const handleNextImage = () => {
        if (imageIndex === (product.images.length - 1)) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }
    return (
        <div className='px-48 pt-12'>

            <div className='flex w-full h-[540px] shadow-xl'>
                {/* image box */}
                <div className='flex flex-col justify-center w-2/5 relative'>
                    <div className='flex justify-center items-center p-4 overflow-hidden'>
                        <img src={product.images[imageIndex]} className='max-w-full max-h-[480px]' />
                    </div>

                    {product.images.length > 1 ?
                        <>
                            <button className='absolute left-4 text-xl text-white bg-[rgba(0,0,0,0.8)] px-1 rounded'
                                onClick={handlePrevImage}>
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button className='absolute right-4 text-xl text-white bg-[rgba(0,0,0,0.8)] px-1 rounded'
                                onClick={handleNextImage}>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </> :
                        null}

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

                    {product.discountPercentage ?
                        <div className='mt-8'>
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
                    <button className=' bg-black w-96 mt-4 p-2 text-white text-lg rounded active:text-gray-400 active:scale-95'>
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}
export default ProductDetail