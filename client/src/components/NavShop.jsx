import { useNavigate } from "react-router-dom";

function NavShop() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between items-center px-24 py-5 bg-black text-white">
            <h1 className="text-4xl font-bold cursor-pointer hover:drop-shadow-[0px_0px_10px_rgba(250,250,250,0.5)]"
                onClick={() => navigate('/')}>
                Chop Shop
            </h1>
            <div>
                <i className="fa-solid fa-cart-shopping text-2xl cursor-pointer hover:drop-shadow-[0px_0px_10px_rgba(250,250,250,0.5)]"></i>
            </div>
        </div>
    )
}
export default NavShop