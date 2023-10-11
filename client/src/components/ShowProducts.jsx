// import products from '../data.json'
import ProductCard from './ProductCard.jsx'
import { useState, useEffect } from 'react'
import { context } from '../contexts/AppContext'
import axios from 'axios'

function ShowProducts() {
    const { apiEndpoint, hadleStars } = context()
    const heading = "Products"
    const [keywords, setKeywords] = useState("")
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [brand, setBrand] = useState("")
    const [brands, setBrands] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState([])

    const getProducts = async () => {
        try {
            const result = await axios.get(`${apiEndpoint}/product/`
                , {
                    params: {
                        keywords,
                        brand,
                        category,
                        page,
                    }
                })
            setProducts(result.data.data)
            setCategories(result.data.categories)
            setBrands(result.data.brands)

            if (pages.length === 0) {
                for (let i = 1; i <= result.data.totalPage; i++) {
                    pages.push(i);
                }
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [page, category, brand, keywords])

    return (
        <div className='flex justify-center px-24'>
            {/* categories */}
            <div className='w-1/5 px-4 pt-20'>
                <h1 className='text-2xl'>Category</h1>
                <div className='pl-4 pt-2 leading-6 h-[400px] overflow-y-scroll'>
                    {categories.map((item, index) => {
                        return (
                            <h1 key={index} className='text-xl text-slate-700 cursor-pointer hover:underline'
                                onClick={() => setCategory(item)}>{item}</h1>
                        )
                    })}
                </div>
                <h1 className='text-2xl mt-4'>Brand</h1>
                <div className='pl-4 pt-2 leading-6 h-[400px] overflow-y-scroll'>
                    {brands.map((item, index) => {
                        return (
                            <h1 key={index} className='text-xl text-slate-700 cursor-pointer hover:underline'
                                onClick={() => setBrand(item)}>{item}</h1>
                        )
                    })}
                </div>
            </div>

            {/* product */}
            <div className='flex flex-col items-center w-4/5'>
                <div className='w-1/2 pt-8'>
                    <input className='w-full text-center px-2 py-1 border rounded focus:outline-none'
                        type='text'
                        placeholder='Search product'
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                </div>
                <div className='p-2 flex space-x-2'>
                    {brand ?
                        <div className='h-6 px-1 flex text-slate-700 bg-slate-200'>
                            {brand}
                            <div className='ml-1 text-black hover:text-gray-500 cursor-pointer' onClick={() => setBrand('')}>x</div>
                        </div>
                        : <div className='h-6'></div>
                    }
                    {category ?
                        <div className='h-6 px-1 flex text-slate-700 bg-slate-200'>
                            {category}
                            <div className='ml-1 text-black hover:text-gray-500 cursor-pointer' onClick={() => setCategory('')}>x</div>
                        </div>
                        : <div className='h-6'></div>}

                </div>
                <h1 className='pt-6 ml-4 text-3xl font-semibold'>{heading}</h1>
                <div className='w-full'>
                    <div className='pt-4 flex justify-start flex-wrap'>
                        {/* map product */}
                        {products.map((item, index) => {
                            let showStar = hadleStars(item.rating)
                            return (
                                <ProductCard key={index} product={item} star={showStar} />
                            )
                        })}
                    </div>
                </div>

                <div className='flex justify-center items-center mb-6 space-x-4'>
                    {page > 1 ?
                        <button className='text-3xl  w-8 h-8 rounded active:text-gray-300'
                            onClick={() => setPage(page - 1)}>
                            {'<'}
                        </button>
                        : null}
                    {pages.map((number, index) => {
                        return (
                            <button key={index}
                                className={`w-8 h-10 rounded ${number === page ? 'bg-slate-100 font-semibold ring ring-black drop-shadow-xl' : "bg-black text-white"} active:scale-95`}
                                onClick={() => setPage(number)}
                            >
                                {number}
                            </button>
                        )
                    })}
                    {page < pages.length ?
                        <button className='text-3xl  w-8 h-8 rounded active:text-gray-300'
                            onClick={() => setPage(page + 1)}>
                            {'>'}
                        </button>
                        : null}
                </div>
            </div>

        </div>
    )
}
export default ShowProducts