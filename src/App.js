import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';

const cardImages = [
  {'src': '/img/helmet-1.png', matched: false},
  {'src': '/img/potion-1.png', matched: false},
  {'src': '/img/ring-1.png', matched: false},
  {'src': '/img/shield-1.png', matched: false},
  {'src': '/img/sword-1.png', matched: false},
  {'src': '/img/scroll-1.png', matched: false}
]

function App() {
  const [cards, setCards] = useState([]);

  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);

  const [choiceTwo, setChoiceTwo] = useState(null);

  // State to set a cards disabled state to true of false
  const [disabled, setDisabled] = useState(false);


  // Shuffle Card Function
  const shuffleCard = () => {
    const ShuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() -0.5)
      .map(card => ({...card, id: Math.random()}))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(ShuffledCards)
      
      setTurns(0)
  }

  // Handling Choice function 
  const handleChoice = ( card ) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Comparing two selected cards
  useEffect(() => {
    
    if(choiceOne && choiceTwo){
      // The setDisabled function below only runs if the choiceOne and choiceTwo have a value then it disables the rest of the cards
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {                   //sets the card array state
          return  prevCards.map(card => {         //maps throught the previous card array
            if (card.src === choiceOne.src) {     //checks to validate if the individual cards mapped matches the selected card choice 
              return {...card, matched: true}     //returns the validated card with the matched attribute updated to true
            } else {
              return card                         //returns the card that doesnt match the condition as it was
            }
          })
        })

        resetTurn()
      } else {
        setTimeout(() => {
          resetTurn()
        }, 700);
      }
    }
  }, [choiceOne, choiceTwo])

  // useEffect for starting the game on mount
  useEffect(() => {
    shuffleCard()
  }, []);

  // Handling reset function
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)

    // This resets the disabled sate back to false
    setDisabled(false)
  }




  return (
    <div className="App">
      <h1>Magic Match</h1>

      <button onClick={() => shuffleCard()}>New Game</button>

      <p>
        Turns: {turns}
      </p>

      <div className="card-grid">
        {cards.map((card) => ( 
          <Card 
            card={card}  
            key={card.id} 
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
