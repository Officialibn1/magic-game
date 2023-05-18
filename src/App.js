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

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  // Reset the card card choice and increase turns count by one
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn + 1)
  }


  // useEffect function to check if the value of the two cards selected matches or not
  useEffect(() => {
    if (choiceOne && choiceTwo) {                               //Checks if both cards have value
      
      if (choiceOne.src === choiceTwo.src) {                    //Compares the src value of both cards
        
        setCards(prevCards => {                                 //Runs this code if the src value of both cards matches
          return prevCards.map(card => {                        //Maps throught the card array to get each individual card
            if (card.src === choiceOne.src) {                   //Validates to see which card src property matches any of the choice property...
                                                                //...thought here we are using the coice one to compare.
              return {...card, matched: true}                   //If any card matches the condition its matched value will be set to true here.    
            
            } else {
              return card                                       //Else it will be returned as its matched value was.
            }
          })
        })            
        resetTurn()
      
      } else {
      
        console.log('Choice doesnt match ! ! !');               //Runs this code if the src value of both cards does not match
        resetTurn()
      
      }
    }
    
  }, [choiceOne, choiceTwo]);                                   //Dependencies for the useEffect function to run

  console.log(cards);

  return (
    <div className="App">
      <h1>Magic Match</h1>

      <button onClick={() => shuffleCards()}>New Game</button>  

      <p>
        Turns: {turns}
      </p>

      <div className="card-grid">
        {cards.map((card) => (
          <Card 
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
