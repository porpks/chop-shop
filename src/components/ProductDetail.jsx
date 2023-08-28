import data from '../data.json'

function ProductDetail(props) {
    const product = data[props.productId - 1]
    return (
        <div className='px-48 pt-12'>

            <div className='flex w-full h-[540px] shadow-xl'>
                {/* image box */}
                <div className='flex flex-col w-2/5'>
                    <div className='flex justify-center items-center h-2/3 p-4 overflow-hidden'>
                        <img src={product.images[0]} />
                    </div>

                    <div className='flex items-center min-w-full h-1/3 overflow-x-auto'>
                        {product.images.map((image, index) => {
                            return (
                                <div key={index} className='w-1/4 h-4/5 flex justify-center items-center mx-2'>
                                    <img src={image} className='min-h-full min-w-full object-cover' />
                                </div>

                            )
                        })}
                    </div>
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