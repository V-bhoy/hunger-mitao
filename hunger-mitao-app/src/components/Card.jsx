export default function Card({item}){
    return <div className={"card"}>
        <img className={"card-img"} alt={"food-image"} src={item.image_url}/>
        <h3>{item.name}</h3>
        <h4>{item.cuisine}</h4>
        <h4>{item.average_rating}</h4>
        <h4>{item.price_for_two}</h4>
        <h4>{item.delivery_time}</h4>
    </div>
}