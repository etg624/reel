import React from 'react';
import PauseButton from './PauseButton';

function ItemCard(props) {
  const { name, status, percentSaved, total, imageUrl, id } = props;
  return (
    <section className="item">
      <h3>{name}</h3>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
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
    </section>
  );
}

export default ItemCard;
