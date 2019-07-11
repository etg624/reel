import React from 'react';
import PauseButton from './PauseButton';
import '../styles/itemCard.css';

function ItemCard(props) {
  const { name, status, percentSaved, total, imageUrl, id } = props;
  return (
    <main className="item-container">
      <section>
        <h3>{name}</h3>
        <div className="item-image">
          <img src={imageUrl} alt={name} />
        </div>
      </section>
      <progress value={percentSaved} max="100" />
      <p>Total: ${total}</p>
      <p
        style={
          status === 'active'
            ? { backgroundColor: '#218975' }
            : { backgroundColor: '#E24F13' }
        }
      >
        {status}
      </p>
      <PauseButton status={status} itemId={id} />
    </main>
  );
}

export default ItemCard;
