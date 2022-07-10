import React from 'react'
const HouseCard = (props) => {
    const colorArray = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info"]
    var randomColorIndex = Math.floor(Math.random() * (5 + 1));
return(
    <div className={[`card text-white bg-primary mb-3 ${colorArray[randomColorIndex]}`]} style={{maxWidth: "18rem"}}>
        <div class="card-header">{props.ag}</div>
        <div class="card-body">
            <h5 class="card-title">{props.city}</h5>
            <p class="card-text">{props.locality}</p>
        </div>
    </div>
)
}
export default HouseCard;
