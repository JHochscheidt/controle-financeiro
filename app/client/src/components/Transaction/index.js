import React from 'react';

import './style.css';

export default function Transaction(transaction) {
  const { category, description, value, type, day } = transaction.transaction;

  const styles = type === '+' ? 'positive' : 'negative';

  return (
    <div className={`transaction ${styles}`}>
      <div className="number">
        <span>{day.toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}</span>
      </div>
      <div className="info">
        <div className="category">
          <span>{category}</span>
        </div>
        <div className="description">
          <span>{description}</span>
        </div>
      </div>
      <div className="value">
        <span>
          {value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
      <div className="options">
        <span>
          <i className="tiny material-icons">edit</i>
        </span>
        <span>
          <i className="tiny material-icons">delete</i>
        </span>
      </div>
    </div>
  );
}
