import Button from "./Button";

function InfoCard({ emoji, title, description, buttonText, className }) {
  return (
    <div className={className}>
      <div className="product-emoji">
        {emoji}
      </div>

      <h2>{title}</h2>
      <p>{description}</p>

      <Button>{buttonText}</Button>
    </div>
  );
}

export default InfoCard;