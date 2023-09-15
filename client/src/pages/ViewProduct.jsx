import { useParams } from "react-router-dom";
import NavShop from "../components/NavShop.jsx"
import ProductDetail from "../components/ProductDetail.jsx";

function ViewProduct() {
    const params = useParams();

    return (
        <>
            <NavShop />
            <ProductDetail productId={params.productId} />
        </>

    )
}
export default ViewProduct