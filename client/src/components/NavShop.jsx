import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { context } from '../contexts/AppContext'

function NavShop() {
    const navigate = useNavigate()
    let totalPrice = 0
    const { cart, setCart } = context()
    const [isShowCart, setIsShowCard] = useState(false)

    const handleCheckout = (price) => {
        let str = "You get all of that if yup, you paid $" + price
        alert(str)
        setCart([])
    }

    return (
        <div className="flex justify-between items-center px-24 h-[10vh] bg-black text-white">
            <h1 className="text-4xl font-bold cursor-pointer hover:drop-shadow-[0px_0px_10px_rgba(250,250,250,0.5)]"
                onClick={() => navigate('/')}>
                Chop Shop
            </h1>
            <div className="relative" onClick={() => setIsShowCard(true)}>
                <i className="fa-solid fa-cart-shopping text-2xl cursor-pointer hover:drop-shadow-[0px_0px_10px_rgba(250,250,250,0.5)]"></i>

                {cart.length > 0 ? <div className="w-6 h-6 bg-red-500 flex justify-center items-center rounded-full absolute -bottom-2 -right-3">
                    {cart.length > 9 ? "9+" : cart.length}
                </div> : null}

            </div>

            {/* cart */}
            {isShowCart ? <div className="fixed top-0 right-0 w-[460px] h-full bg-white shadow-[0px_0px_20px_rgba(150,150,150,0.5)] z-10">
                <div className="bg-black h-[10vh] flex justify-between items-center px-10">
                    <div className="text-3xl">Cart</div>
                    <div className="text-3xl w-10 h-10 flex justify-center items-center rounded-full border-2 border-white hover:text-black hover:bg-white cursor-pointer"
                        onClick={() => setIsShowCard(false)}>
                        X
                    </div>
                </div>
                {cart.length > 0 ?
                    <div className="flex flex-col items-center h-[68vh] overflow-y-scroll">
                        {cart.map((item) => {
                            {/* (_id, id , title, description, price, discountPercentage, stock, rating, thumbnail, images[]) */ }
                            return (
                                <div key={item._id} className="flex border w-[90%] h-[180px]">
                                    <div className="flex justify-center items-center w-[400px] h-[160px] ">
                                        <img src={item.thumbnail} className="max-w-full max-h-full" />
                                    </div>
                                    <div className="p-4 w-full">
                                        <h1 className="text-black text-xl font-semibold">{item.title}</h1>
                                        <h1 className="text-gray-400">{item.description.slice(0, 50)}...</h1>
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-black">$ {(item.price * (100 - item.discountPercentage) / 100).toFixed(2)}</h1>
                                            <div className="flex flex-col">
                                                <h1 className="text-gray-500">quantity: {1}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div> :
                    <div className="flex flex-col items-center h-[68vh] text-gray-500 p-10">No Product in Cart</div>}
                <div className="flex flex-col items-end border h-[32vh] p-2">
                    <div className="flex justify-between items-end w-full">
                        <h1 className="text-black text-xl font-semibold">Price:</h1>
                        <h1 className="text-black">{
                            cart.reduce((acc, cur) => {
                                acc += Number(cur.price)
                                return acc
                            }, 0).toFixed(2)
                        } $</h1>
                    </div>
                    <div className="flex justify-between items-end w-full">
                        <h1 className="text-black text-xl font-semibold">Discount:</h1>
                        <h1 className="text-red-800">-{
                            cart.reduce((acc, cur) => {
                                acc += Number((cur.price * cur.discountPercentage / 100))
                                return acc
                            }, 0).toFixed(2)
                        } $</h1>
                    </div>
                    <div className="flex justify-between items-end w-full mt-2 mb-1">
                        <h1 className="text-black text-2xl font-semibold">Total price:</h1>
                        <h1 className="text-black text-xl">{
                            cart.reduce((acc, cur) => {
                                acc += Number((cur.price * (100 - cur.discountPercentage) / 100))
                                totalPrice = acc
                                return acc
                            }, 0).toFixed(2)
                        } $</h1>
                    </div>
                    <button className="bg-black px-4 py-2 text-lg rounded shadow-xl active:bg-gray-400 active:scale-95"
                        onClick={() => {
                            handleCheckout(totalPrice.toFixed(2))
                        }}>
                        Checkout
                    </button>
                </div>
            </div> : null}
        </div>
    )
}
export default NavShop