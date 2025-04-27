import Card from "./Card.jsx";
import {data} from "../utils/mock-data.js"

export default function Body(){
    return <div className={"body"}>
       <div className={"search-bar"}>
           <p>Search</p>
       </div>
        <div className={"card-container"}>
            {data?.restaurants?.map((item)=> <Card key={item.restaurant_id} item={item}/>)}
        </div>
    </div>
}