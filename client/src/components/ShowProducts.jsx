// import products from '../data.json'
import ProductCard from './ProductCard.jsx'
import { useState, useEffect } from 'react'
import { context } from '../contexts/AppContext'
import axios from 'axios'

function ShowProducts() {
    const { apiEndpoint } = context()
    const heading = "All Product"
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [products, setProducts] = useState([])
    const [keywords, setKeywords] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

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
            setTotalPage(result.data.totalPage)
        } catch (error) {
            alert(error)
        }
    }

    const hadleStars = (rating) => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (rating >= 1) {
                stars.push("fa-solid fa-star")
                rating -= 1
            }
            else if (rating >= 0.5) {
                stars.push("fa-solid fa-star-half-stroke")
                rating -= 0.5
            }
            else {
                stars.push("fa-regular fa-star")
            }
        }
        return stars
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='flex justify-center px-24'>
            {/* categories */}
            <div className='w-1/5 px-4 pt-20'>
                <h1 className='text-2xl'>Category</h1>
                <div className='pl-4 pt-2 leading-6 h-[400px] overflow-y-scroll'>
                    {categories.map((item, index) => {
                        return (
                            <h1 key={index} className='text-xl text-slate-700 cursor-pointer hover:underline'>{item}</h1>
                        )
                    })}
                </div>
                <h1 className='text-2xl mt-4'>Brand</h1>
                <div className='pl-4 pt-2 leading-6 h-[400px] overflow-y-scroll'>
                    {brands.map((item, index) => {
                        return (
                            <h1 key={index} className='text-xl text-slate-700 cursor-pointer hover:underline'>{item}</h1>
                        )
                    })}
                </div>
            </div>

            {/* product */}
            <div className='flex flex-col items-center w-4/5'>
                <h1 className='pt-8 ml-4 text-3xl font-semibold'>{heading}</h1>
                <div className='pt-4 flex justify-center flex-wrap'>

                    {/* map product */}
                    {products.map((item, index) => {
                        let showStar = hadleStars(item.rating)

                        return (
                            <ProductCard key={index} product={item} star={showStar} />
                        )
                    })}

                </div>
            </div>

        </div>
    )
}
export default ShowProducts