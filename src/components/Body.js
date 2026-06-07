import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7596035&lng=83.38185130000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setResList( json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
        
    return (resList.length === 0) ? <Shimmer /> :  (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="searchbox" type="text" placeholder="Search for restaurant" value={searchText} onChange={(e) =>   setsearchText(e.target.value)} />
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
                    filteredResList.map((restaurant) => {
                        return <RestaurantCard
                            key={restaurant.info.id}
                            resData={restaurant} />;
                    })
                }
            </div>
        </div>
    );
};

export default Body;