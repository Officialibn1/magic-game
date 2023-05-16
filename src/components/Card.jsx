import './Card.css'

const Card = ({ card, handleChoice, flipped, disabled }) => {
    
    const handleClick = () => {
        // this if statement below checks if a card is disabled and then prevents it fro  runnung the handlechoice function
        if (!disabled) {
            handleChoice(card)
        }
    }
     
    return (
        <div className="card">
            <div className={flipped ? 'flipped' : ''}>

                <img src={card.src} alt="card front" className="front" />

                <img src='/img/cover.png' alt="card back" className="back" onClick={handleClick}/>
            
            </div>
          </div>
    );
}

export default Card;
