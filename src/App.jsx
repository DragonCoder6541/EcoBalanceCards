import { useState } from "react";
import "./App.css"; // Import the CSS file

const staticImage = "/images/static-card.png"; // Path to the static image
const cardImages = Array.from({ length: 100 }, (_, i) => `/images/${i + 1}.png`);

export default function CardDeck() {
  const [selectedImage, setSelectedImage] = useState(staticImage);

  const pickRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardImages.length);
    setSelectedImage(cardImages[randomIndex]);
  };

  const resetDeck = () => {
    setSelectedImage(staticImage);
  };

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner">
        Random Card Picker
      </div>
      
      {/* Centered Content */}
      <p>Click the deck to choose a card</p>
      <img 
        src={selectedImage} 
        alt="Selected Card" 
        onClick={pickRandomCard} 
        className="card-image"
      />
      <div className="button-group">
        <button 
          onClick={pickRandomCard} 
          className="button blue"
        >
          Pick a Card
        </button>
        <button 
          onClick={resetDeck} 
          className="button red"
        >
          Place Back in Deck
        </button>
      </div>
    </div>
  );
}
