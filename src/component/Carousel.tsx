import React, { useEffect, useState } from "react";
import DealCard from "./DealCard";
import './Carousel.css';

import IconArrowLeftGrey from '/icon/arrow-left.png';
import IconArrowRightGrey from '/icon/arrow-right.png'
import { Link } from "react-router-dom";
import { CardData } from "../data/data";


interface CarouselProps {
    cardData: CardData[];

}

const Carousel: React.FC<CarouselProps> = ({ cardData }) => {
    // const CardPerDeck = 4;
    // const [currentDeck, setCurrentDeck] = useState(0);

    // const TotalCard = cardData.length;
    // const TotalDecks = Math.ceil(TotalCard / CardPerDeck);
    // const calCardWidth = () => {
    //     const screenWidth = window.innerWidth;
    //     if (screenWidth > 1280) {
    //         return 289.6;
    //     } else if (screenWidth > 768) {
    //         return 256;
    //     } else {
    //         return 264;
    //     }
    // };


    const calCardPerDeck = () => {
        const screenWidth = window.innerWidth;
      
        if (screenWidth >= 980) {
          return 4;
        } else if (screenWidth >= 700 && screenWidth < 980) {
          return 3;
        } else if (screenWidth > 445 && screenWidth < 700) {
          return 2;
        } else {
          return 1;
        }
      };
      
    //   const calCardToShow = () => {
    //     const screenWidth = window.innerWidth;
      
    //     if (screenWidth > 1280) {
    //       return 4;
    //     } else {
    //       return 5;
    //     }
    //   };

    // const [cardWidth, setCardWidth] = useState(calCardWidth);
    const [cardsPerDeck, setCardsPerDeck] = useState(calCardPerDeck());
    // const [cardsToShow, setCardsToShow] = useState(calCardToShow())
    const [currentDeck, setCurrentDeck] = useState(0);
    const cardsToShow = 4;

    const totalCards = cardData.length;
    const totalDecks = Math.ceil(totalCards / cardsPerDeck);
    const handlePrevDeck = () => {
        setCurrentDeck((prevDeck) => (prevDeck > 0 ? prevDeck - 1 : totalDecks - 1));

    };

    const handleNextDeck = () => {
        setCurrentDeck((prevDeck) => (prevDeck < totalDecks - 1 ? prevDeck + 1 : 0));

    };

    const startIndexOfDeck = currentDeck * cardsPerDeck;
    const endIndexOfDeck = startIndexOfDeck + cardsToShow;
    const displayedCards = cardData.slice(startIndexOfDeck, endIndexOfDeck);

    // const updateCardsPerDeck = () => {
    //     const newCardWidth = calCardWidth();
    //     setCardWidth(newCardWidth);

    //     const newCardsPerDeck = Math.floor(window.innerWidth / newCardWidth);
    //     setCardsPerDeck(newCardsPerDeck);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', updateCardsPerDeck);
    //     return () => {
    //         window.removeEventListener('resize', updateCardsPerDeck);
    //     };
    // }, [cardsPerDeck, cardWidth]);

    const updateCardsPerDeck = () => {
        const newCardsPerDeck = calCardPerDeck();
        setCardsPerDeck(newCardsPerDeck);
      };
    
      useEffect(() => {
        window.addEventListener('resize', updateCardsPerDeck);
        return () => {
          window.removeEventListener('resize', updateCardsPerDeck);
        };
      }, []);

    return (
        
        <div className="carousel-wrapper">
            <div className="carousel">

                {displayedCards.map((card, index) => (
                    // <DealCard key={index} data={card}/>
                    <Link to={`/product/${card.id}`} key={index}>
                        <DealCard data={card} />
                    </Link>
                ))}
            </div>
            <div className="arrows-inside">
                <button className="arrow-left" onClick={handlePrevDeck}>
                    <img src={IconArrowLeftGrey} />
                </button>
                <button className="arrow-right" onClick={handleNextDeck}>
                    <img src={IconArrowRightGrey} />
                </button>
            </div>
            
        </div>
    );
};
export default Carousel;

