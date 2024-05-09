import card from './card.js';

const cardsgrid = ({cards}) => {
  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <card key={index} {...card} />
      ))}
    </div>
  );
};

export default cardsgrid;