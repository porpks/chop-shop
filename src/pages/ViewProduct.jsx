import { useParams } from "react-router-dom";
import NavShop from "../components/NavShop.jsx"
import Product from "../components/Product.jsx";

function ViewProduct() {
    const params = useParams();

    return (
        <>
            <NavShop />
            <Product />
            <h1>{params.productId}</h1>
        </>

    )
}
export default ViewProduct