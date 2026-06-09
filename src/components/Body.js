import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_API_URL);
        const json = await data.json();
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (resList.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="searchbox" type="text" placeholder="Search for restaurant" value={searchText} onChange={(e) => setsearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredResList(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredResList(filteredList);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredResList.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurant/" + restaurant.info.id}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;