import './Card.css'


const Card = ({ card, handleChoice, flipped, disabled }) => {

    // Setting the handle choice value based on the card a user clicks
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? 'flipped' : ''}>

                <img src={card.src} alt="Card Front" className="front" />

                <img src='./img/cover.png' alt="Card back" className="back" onClick={handleClick}/>

            </div>
        </div>
    );
}

export default Card;
