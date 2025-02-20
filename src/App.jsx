import { useState } from "react";

const staticImage = "/images/static-card.png"; // Path to the static image
const cardImages = [
  "/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png",
  "/images/6.png", "/images/7.png", "/images/8.png", "/images/9.png", "/images/10.png"
];

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
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-100">
      <p className="text-xl mb-4">Click the deck to choose a card</p>
      <div className="flex flex-col items-center">
        <img 
          src={selectedImage} 
          alt="Selected Card" 
          onClick={pickRandomCard} 
          className="w-[556px] h-[408px] border rounded-lg cursor-pointer shadow-lg"
        />
        <button 
          onClick={resetDeck} 
          className="mt-4 px-4 py-2 text-lg font-bold bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Place Back in Deck
        </button>
      </div>
    </div>
  );
}
