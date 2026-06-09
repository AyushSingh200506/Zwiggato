import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const ResInfo = () => {
    const { restaurantId } = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchInfo();
    }, []);
    
    const fetchInfo = async () => {
        const data = await fetch(
            MENU_API_URL + restaurantId
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    
    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="res-info">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {avgRating} stars</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
};

export default ResInfo;