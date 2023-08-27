import diamondSvg from "./small-diamond.svg";

const Card = ({ card, handleCardClick, disabled }) => {
  return (
    <button
      className={`card ${card.matchFound ? "matched" : ""}`}
      disabled={disabled}
      onClick={handleCardClick}
      data-id={card.id}
    >
      <div className="front side">
        <img src={diamondSvg} width="60" />
      </div>
      <div className="side back">{card.sym}</div>
    </button>
  );
};
export default Card;
