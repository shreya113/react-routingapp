import { useParams } from "react-router-dom";
import React from "react";


const ProductDetails = () => {
const PRODUCT_ARRAY = [
    {
        id: "p1",
        name: "Books",
        description: "this is books page",
    },
    {
        id: "p2",
        name:"Paper",
        description: "this is paper page",
    },
    {
        id: "p3",
        name: "pens",
        description: "this is pens page",
    },
];

    const params = useParams();
    const product_data = PRODUCT_ARRAY.find(
        (product) => product.id === params.productId
    );
    if(!product_data){
        return <p>No product found</p>;
    }
    return (
    <React.Fragment>
        <h1>Product Details</h1>
        <p>{product_data.name}</p>
        <p>{product_data.description}</p>
    </React.Fragment>
    );
};

export default ProductDetails;