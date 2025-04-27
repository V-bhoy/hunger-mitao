import Card from "./Card.jsx";
import {useEffect, useState} from "react";
import {fetchRestaurants} from "../api/fetchRestaurants.js";
import Shimmer from "./Shimmer.jsx";

export default function Body() {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetchRestaurants();
        setRestaurants(data?.responseData);
        setFilteredRestaurants(data?.responseData);
    }

    const filterTopRestaurants = () => {
        const topRestaurants = restaurants.filter((item) => item?.rating >= 4.5);
        setFilteredRestaurants(topRestaurants);
    }
    const showAllRestaurants = () => {
        setFilteredRestaurants(restaurants);
    }
    const filterSearchRestaurants = () => {
        const searchRestaurants = restaurants.filter((item) => item?.name?.toLowerCase()?.includes(searchValue.toLowerCase()));
        setFilteredRestaurants(searchRestaurants);
    }

    if(!filteredRestaurants.length){
        return <Shimmer/>;
    }

    return <div className={"body"}>
        <div className={"filters"}>
            <div className={"search-bar"}>
                <input value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} type={"text"}
                       placeholder={"Search"}/>
                <button style={{marginLeft: 10}} onClick={filterSearchRestaurants}>Search</button>
            </div>
            <div className={"filter-btns"}>
                <button onClick={filterTopRestaurants}>Top Restaurants</button>
                <button onClick={showAllRestaurants} style={{marginLeft: 10}}>Show All</button>
            </div>

        </div>

        <div className={"card-container"}>
            {filteredRestaurants?.map((item) => <Card key={item.id} item={item}/>)}
        </div>
    </div>
}