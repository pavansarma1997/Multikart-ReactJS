import "../styles/transport.scss";
import { FaTruckMonster } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi"

export default function Transport() {
    return (
        <div className="transport">
            <div className="tp">
                <FaTruckMonster className="ticon" />
                <p>
                    FREE SHIPPING
                </p>
                Free Shipping World Wide
            </div>
            <div className="tp">
                <BsClockHistory className="ticon" />
                <p>
                    24 X 7 SERVICE
                </p>
                Online Service For 24 X 7
            </div>
            <div className="tp">
                <TfiAnnouncement className="ticon" />
                <p>
                    FESTIVAL OFFER
                </p>
                New Online Special Festival Offer
            </div>
            <h2>
                # INSTAGRAM

            </h2>
        </div>

    )
}