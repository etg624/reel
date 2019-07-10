import React from 'react';

function ItemCard(props) {
  const { name, status, percentSaved, total, imageUrl } = props;
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
    </section>
  );
}

export default ItemCard;
