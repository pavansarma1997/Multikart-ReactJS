import { useState } from "react";
import { AiFillHeart, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt2, BiDownArrow } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import {BsMinecartLoaded} from "react-icons/bs"
import "../styles/navbar.scss"
import { useSelector } from "react-redux";
import ShoppingCart from "./cart";


const Navbar = () => {
    const [display, setDisplay] = useState(false)
    const cart = useSelector(state => state.Cart);
    return (
        <>
            <div className="nav1">

                <div className="nav1">
                    <p>
                        Welcome to Our store Multikart
                    </p>
                    <p>
                        Call Us: 123 - 456 - 7890
                    </p>
                </div>
                <div className="nav1">
                    <p>
                        <a><AiFillHeart />Wishlist</a>
                    </p>
                    <p>
                        <a><CgProfile />My Acoount</a>
                    </p>

                </div>

            </div>

            <div className="nav2">
                <p>
                    <AiOutlineMenu />
                </p>
                <img src="https://multikart-react.vercel.app/assets/images/icon/logo/18.png" />
                <ul className="ul">
                    <li>
                        Home<BiDownArrow />
                    </li>
                    <li>Shop<BiDownArrow /></li>
                    <li>Products<BiDownArrow /></li>
                    <li>Features<BiDownArrow /></li>
                    <li>Pages<BiDownArrow /></li>
                    <li>Blogs<BiDownArrow /></li>
                </ul>
                <p>
                    <BiSearchAlt2 />
                </p>
                <p>
                    <FcSettings />
                </p>
                <p>
                    <BsMinecartLoaded onClick={() => setDisplay(true)}  /> {cart.totalQty}
                </p>
                <ShoppingCart pass={display} setPass={setDisplay} />
            </div>
        </>
    )
}

export default Navbar;