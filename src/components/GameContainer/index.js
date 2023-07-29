import { useEffect, useState } from "react";
import CardItem from "../CardItem";
import "./index.css";

const gameData = [
  {
    id: 1,
    name: "Patlu",
    imageUrl:
      "https://cdn.nickindia.com/wp-content/uploads/2018/06/character-5-1.png",
    isOpen: false,
  },
  {
    id: 2,
    name: "Mottu",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODY4Y2UyODUtYjkzNC00NmZlLWEzNWYtMTAxYmIzNGVlYmVkXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
    isOpen: false,
  },
  {
    id: 3,
    name: "Ghasitaram",
    imageUrl:
      "https://cdn.nickindia.com/wp-content/uploads/2018/06/character-2-1.png",
    isOpen: false,
  },
  {
    id: 4,
    name: "Jakka",
    imageUrl:
      "https://cdn.nickindia.com/wp-content/uploads/2018/06/character-4-1.png",
    isOpen: false,
  },
  {
    id: 5,
    name: "Boxer",
    imageUrl:
      "data:image/jpeg;base64,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",
    isOpen: false,
  },
  {
    id: 6,
    name: "Singam",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a03f22e0e7209f9ce9b41db8d443314d3d23289b5a443c462bdb75adb3f5f482._RI_TTW_.jpg",
    isOpen: false,
  },
  {
    id: 7,
    name: "Patlu",
    imageUrl:
      "https://cdn.nickindia.com/wp-content/uploads/2018/06/character-5-1.png",
    isOpen: false,
  },
  {
    id: 8,
    name: "Mottu",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODY4Y2UyODUtYjkzNC00NmZlLWEzNWYtMTAxYmIzNGVlYmVkXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
    isOpen: false,
  },
  {
    id: 9,
    name: "Ghasitaram",
    imageUrl:
      "https://cdn.nickindia.com/wp-content/uploads/2018/06/character-2-1.png",
    isOpen: false,
  },
  {
    id: 10,
    name: "Jakka",
    imageUrl:
      "https://cdn.nickindia.com/wp-content/uploads/2018/06/character-4-1.png",
    isOpen: false,
  },
  {
    id: 11,
    name: "Boxer",
    imageUrl:
      "data:image/jpeg;base64,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",
    isOpen: false,
  },
  {
    id: 12,
    name: "Singam",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a03f22e0e7209f9ce9b41db8d443314d3d23289b5a443c462bdb75adb3f5f482._RI_TTW_.jpg",
    isOpen: false,
  },
];

const GameContainer = () => {
  const [cardList, setCardList] = useState([...gameData]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  useEffect(() => {
    if (firstCard && secondCard) {
      setTimeout(() => {
        if (firstCard.imageUrl !== secondCard.imageUrl) {
          setCardList(
            cardList.map((item) =>
              item.id === firstCard.id || item.id === secondCard.id
                ? {
                    ...item,
                    isOpen: false,
                  }
                : item
            )
          );
        }
        setFirstCard(null);
        setSecondCard(null);
      }, 1000);
    }
  }, [firstCard, secondCard]);

  const onClickImage = (currentId) => {
    const filteredCard = cardList.find((item) => item.id === currentId);

    if (filteredCard.isOpen) return;

    if (!firstCard) {
      setFirstCard(filteredCard);
    } else if (!secondCard) {
      setSecondCard(filteredCard);
    } else {
      return;
    }

    setCardList(
      cardList.map((item) =>
        item.id === currentId
          ? {
              ...item,
              isOpen: true,
            }
          : item
      )
    );
  };

  return (
    <div className="bg-container">
      <ul className="game-container">
        {cardList.map((item) => {
          return (
            <CardItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              onClick={onClickImage}
              isOpen={item.isOpen}
            ></CardItem>
          );
        })}
      </ul>
    </div>
  );
};

export default GameContainer;
