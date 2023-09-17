import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { context } from '../contexts/AppContext'

function NavShop() {
    const navigate = useNavigate()
    const { cart, setCart } = context()
    const [isShowCart, setIsShowCard] = useState(false)

    return (
        <div className="flex justify-between items-center px-24 py-5 bg-black text-white">
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
                <div className="bg-black h-20 flex justify-between items-center px-10">
                    <div className="text-3xl">Cart</div>
                    <div className="text-3xl w-10 h-10 flex justify-center items-center rounded-full border-2 border-white hover:text-black hover:bg-white cursor-pointer"
                        onClick={() => setIsShowCard(false)}>
                        X
                    </div>
                </div>
            </div> : null}
        </div>
    )
}
export default NavShop