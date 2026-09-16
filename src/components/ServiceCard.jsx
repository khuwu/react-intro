function ServiceCard({emoji, title, description}){
    return(
        <div className="service-card">

            <div className="service-emoji">
                {emoji}
            </div>

        <h2>{title}</h2>
        <p>{description}</p>

        <button>Learn More</button>

        </div>
    );
}

export default ServiceCard;