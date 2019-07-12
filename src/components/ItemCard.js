import React from 'react';
import PauseButton from './PauseButton';
import ProgressBar from './ProgressBar';
import '../styles/ItemCard.css';

function percentHandler(total, percentSaved) {
  return Math.abs(Math.floor(total * (percentSaved * 0.01) - total));
}

function ItemCard(props) {
  const { name, status, percentSaved, total, imageUrl, id } = props;
  return (
    <main className="item-container">
      <section className="item-image">
        <img src={imageUrl} alt={name} />
      </section>
      <section className="item-info">
        <p className="bold name">{name}</p>
        <p className="total-price">Total price: ${total}</p>
        <p>
          You only owe{' '}
          <span className="bold">${percentHandler(total, percentSaved)}</span>{' '}
          more!
        </p>
        <ProgressBar fill={percentSaved} />
      </section>
      <aside className="status">
        <p className={`item-status bold ${status}`}>{status}</p>

        <PauseButton status={status} itemId={id} />
      </aside>
    </main>
  );
}

export default ItemCard;
