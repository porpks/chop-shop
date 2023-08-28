import { useNavigate } from "react-router-dom";

function ProductCard(props) {
    const navigate = useNavigate()

    return (
        <div className='bg-white w-56 h-[340px] m-4 flex flex-col drop-shadow-2xl'>
            <div className='w-full max-h-28 overflow-hidden hover:scale-105 hover:rounded duration-300 relative'>
                <img src={props.product.thumbnail} className='min-w-full' />
            </div>

            <div className='px-4'>
                <h1 className='text-2xl font-semibold mt-2 hover:underline cursor-pointer active:text-gray-500'
                    onClick={() => navigate(`/view/${props.product.id}`)}>
                    {props.product.title}
                </h1>
                <h1 className='flex text-sm'>Brand:
                    <h1 className='ml-1 hover:underline cursor-pointer active:text-gray-500'>{props.product.brand}</h1>
                </h1>
                <h1 className='flex text-sm'>Category:
                    <h1 className='ml-1 hover:underline cursor-pointer active:text-gray-500'>{props.product.category}</h1>
                </h1>

                <div className='flex items-center'>
                    <i className={props.star[0]}></i>
                    <i className={props.star[1]}></i>
                    <i className={props.star[2]}></i>
                    <i className={props.star[3]}></i>
                    <i className={props.star[4]}></i>
                    <h1 className='ml-1 text-gray-500'>
                        {props.product.rating}
                    </h1>
                </div>

                {props.product.discountPercentage ?
                    <div className='flex items-end mt-2'>
                        <h1 className='mt-1 text-gray-400 line-through'>${props.product.price.toFixed(2)}</h1>
                        <h1 className='ml-2 text-xl'>${(props.product.price * (100 - props.product.discountPercentage) / 100).toFixed(2)}</h1>
                        <h1 className='absolute top-2 right-0 bg-red-600 text-white px-1 cursor-default'>-{props.product.discountPercentage.toFixed(2)}%</h1>
                    </div>
                    :
                    <div className='flex items-end mt-2'>
                        <h1 className='mt-1'>${props.product.price.toFixed(2)}</h1>
                    </div>
                }
            </div>
            <button className='absolute bottom-0 bg-black w-[96%] m-1 p-2 text-white text-lg rounded active:text-gray-400 active:scale-95'>
                Add to cart
            </button>
        </div>
    )
}
export default ProductCard