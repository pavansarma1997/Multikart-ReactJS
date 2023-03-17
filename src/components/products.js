import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductsdata } from "../redux/productSlice";
import { v4 as uuid } from "uuid";
import ProductCard from "./productCard";
import "../styles/products.scss"


const New = (props) => {
    const products = useSelector(state => state.Products.value);
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchproductsdata());
    }, [])


    return (

        <div>
            <h3>

                Special Offer
            </h3>
            <h1>
                TOP COLLECTION
                <hr />
            </h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="products-container">
                {products.map(e => <ProductCard key={uuid()} data={e} />)}
            </div>
        </div>
    )
}
export default New;