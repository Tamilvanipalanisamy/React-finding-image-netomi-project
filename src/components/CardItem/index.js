import "./index.css";

const CardItem = ({ isOpen, imageUrl, name, id, onClick }) => {
  const image = isOpen
    ? imageUrl
    : "https://variety.com/wp-content/uploads/2014/08/nick-nickelodeon-logo.jpg?crop=97px%2C51px%2C794px%2C442px&resize=1000%2C563";

  return (
    <li className="each-item-list" onClick={() => onClick(id)}>
      <img src={image} alt={name} className="image-style" />
    </li>
  );
};

export default CardItem;
