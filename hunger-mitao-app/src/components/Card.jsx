export default function Card({item}){
    return <div className={"card"}>
        <div className={"card-img-container"}>
            <img className={"card-img"} alt={"resto-image"} src={item.image}/>
        </div>
        <h3>{item.name}</h3>
        <h4>{item.cuisines.join(", ")}</h4>
        <h4>{item.rating}</h4>
        <h4>{item.costForTwo}</h4>
        <h4>{item.deliveryTime}</h4>
    </div>
}