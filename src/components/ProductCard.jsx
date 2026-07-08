function ProductCard(props){
    return(
        <div className="product-card">
            <div className="product-emoji">
                {props.emoji}
            </div>

            <h2>{props.name}</h2>
            <p>{props.price}</p>

            <button>Buy Now</button>

        </div>
    );
}

export default ProductCard;