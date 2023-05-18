
const Card = ({ card, handleChoice }) => {

    // Setting the handle choice value based on the card a user clicks
    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div>
                <img src={card.src} alt="Card Front" className="front" />
                <img src='./img/cover.png' alt="Card back" className="back" onClick={handleClick}/>
            </div>
        </div>
    );
}

export default Card;
