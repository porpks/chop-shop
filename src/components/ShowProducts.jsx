import data from '../data.json'
import ProductCard from './ProductCard.jsx'
// import { useState } from 'react'

function ShowProducts() {
    const heading = "All Product"
    const categories = []
    const brands = []

    for (let i of data) {
        if (!categories.includes(i.category)) {
            categories.push(i.category)
        }
        if (!brands.includes(i.brand)) {
            brands.push(i.brand)
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
    return (
        <div className='flex justify-center px-24'>
            {/* categories */}
            <div className='w-1/5 px-4 pt-20'>
                <h1 className='text-2xl'>Category</h1>
                <div className='pl-4 pt-2 leading-6'>
                    {categories.map((item, index) => {
                        return (
                            <h1 key={index} className='text-xl text-slate-700 cursor-pointer hover:underline'>{item}</h1>
                        )
                    })}
                </div>
                <h1 className='text-2xl mt-4'>Brand</h1>
                <div className='pl-4 pt-2 leading-6'>
                    {brands.map((item, index) => {
                        return (
                            <h1 key={index} className='text-xl text-slate-700 cursor-pointer hover:underline'>{item}</h1>
                        )
                    })}
                </div>
            </div>

            {/* product */}
            <div className='flex flex-col w-4/5'>
                <h1 className='pt-8 ml-4 text-3xl font-semibold'>{heading}</h1>
                <div className='pt-4 flex justify-center flex-wrap'>

                    {/* map product */}
                    {data.map((item, index) => {
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