import { useParams } from "react-router-dom";

function ViewProduct() {
    const params = useParams();

    return (
        <>
            <h1>ViewProduct</h1>
            <h1>{params.productId}</h1>
        </>

    )
}
export default ViewProduct