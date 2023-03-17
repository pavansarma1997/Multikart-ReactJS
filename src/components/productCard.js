import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../redux/cartslice";
import "../styles/productCard.scss";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai"
import { BsArrowRepeat } from "react-icons/bs"
const ProductCard = ({ data }) => {
    const cart = useSelector(state => state.Cart);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <img src={data.images[0].src} />
            <h3>{data.title}</h3>
            <p className="icons">
                <AiOutlineHeart className="icon" />
                <AiOutlineSearch className="icon" />
                <BsArrowRepeat className="icon" />
            </p>
            <h4>${data.price}</h4>
            <button className="btn" onClick={() => dispatch(addToCart(data))}>+</button>
            <button className="btn" onClick={() => dispatch(removeFromCart(data))}>-</button>

        </div>
    )
}

export default ProductCard;