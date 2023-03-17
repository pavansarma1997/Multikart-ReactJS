import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/cart.scss";

const ShoppingCart = (prop) => {
    const cart = useSelector(state => state.Cart);
    // const dispatch = useDispatch();
    return (
        <div className={prop.pass ? ("cart" + " " + "cartmove") : "cart"}>
            <AiOutlineClose onClick={() => prop.setPass(false)} className="close" />
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                <div className="cart-product-container">
                    {cart.items.map(e => {
                        return (
                            <div className="cart-item">
                                <div className="cart-item-header">
                                    <div className="cart-item-price">
                                        <p>{e.title}</p>
                                        <p>{e.cartQty}*{e.price}</p>
                                    </div>
                                    <img className="cart-img" src={e.images && e.images[0].src}></img>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h4>Total: ${cart.totalPrice}</h4>
                <button>CHECKOUT</button>

            </div>
        </div>
    )
}

export default ShoppingCart;