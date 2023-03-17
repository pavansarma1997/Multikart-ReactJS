import React, { useState } from "react";
import New from "./products";
import { GrNext, GrPrevious } from 'react-icons/gr';
import "../styles/carousel2.scss"

export default function Carousel() {
    const [count, setcount] = useState(0);

    function previous() {
        setcount(count - 1);
        let body = document.getElementById('cont');
        if (count > 0) {
            body.style.transform += "translateX(15rem)";
            body.style.transition = ".2s";
        } else {
            body.style.transform += "translateX(0)";
            setcount(0)
        }
    }
    function Next() {
        setcount(count + 1);
        let body = document.getElementById("cont");
        if (count < 4) {
            body.style.transform += "translateX(-15rem)";
            body.style.transition = ".3s";
        } else {
            body.style.transform += "translateX(0)";
            setcount(4);
        }
    }

    return (
        <div className="carousel-container">
            <div id="cont" className="carousel-item-cont">
                <New />
            </div>
            <div className="prev" onClick={previous}><GrPrevious /></div>
            <div className="next" onClick={Next}><GrNext /></div>

        </div>


    )
}