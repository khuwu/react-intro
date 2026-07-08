function ServiceCard(props){
    return(
        <div className="service-card">

            <div className="service-emoji">
                {props.emoji}
            </div>

        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <button>Learn More</button>

        </div>
    );
}

export default ServiceCard;