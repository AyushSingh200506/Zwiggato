import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const{ cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
    return (
        <div className="restaurant-card">
            <img alt="restaurant-logo" className="restaurant-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    );
};

export default RestaurantCard;