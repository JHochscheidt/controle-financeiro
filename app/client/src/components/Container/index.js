import React, { useState, useEffect } from 'react';
import './style.css';

import TransactionService from '../../services/TransactionService';

export default function Container() {
  const [yearMonth, setYearMonth] = useState('2020-08');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // fazer consulta no banco e retornar as transactions
    const distinctTransactions = TransactionService.getAll();
    console.log(distinctTransactions);
  }, []);

  const handleChangeSelect = (event) => {
    console.log(event.target.value);
    setYearMonth(event.target.value);
  };

  return (
    <div className="container">
      <h3>Controle Financeiro Pessoal</h3>
      {/* FILTRO */}
      {/* options vai ser de acordo com o que tem no banco de dados */}
      <form>
        <div>
          <button>&lt;</button>
        </div>
        <label>
          <select
            value={yearMonth}
            onChange={handleChangeSelect}
            className="browser-default"
          >
            {/* {transactions.map((transaction, key) => {
              <option key={key} value={transaction.yearMonth}>
                {transaction.yearMonth}
              </option>;
            })} */}
          </select>
        </label>
        <div>
          <button>&gt;</button>
        </div>
      </form>
      {/* INFOS FILTRO */}
      <div className="resume">
        <span>Lançamentos: </span>
        <span>Receitas:</span>
        <span>Despesas:</span>
        <span>Saldo:</span>
      </div>

      <div className="addSearchTransaction">
        <button>
          <span>+</span> Novo Lançamento
        </button>
        <input
          type="text"
          name="filtroNomeTransacao"
          id="filtroNomeTransacao"
          placeholder="Filtro"
        />
      </div>
      <div className="transactions">
        <div className="transaction">
          <div className="number">
            <span>01</span>
          </div>
          <div className="info">
            <div className="category">
              <span>Lazer</span>
            </div>
            <div className="description">
              <span>Viagem para a praia</span>
            </div>
          </div>
          <div className="valor">
            <span>R$10,00</span>
          </div>
          <div className="options">
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
        <div className="transaction">
          <div className="number">
            <span>01</span>
          </div>
          <div className="info">
            <div className="category">
              <span>Lazer</span>
            </div>
            <div className="description">
              <span>Viagem para a praia</span>
            </div>
          </div>
          <div className="valor">
            <span>R$10,00</span>
          </div>
          <div className="options">
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
        <div className="transaction">
          <div className="number">
            <span>01</span>
          </div>
          <div className="info">
            <div className="category">
              <span>Lazer</span>
            </div>
            <div className="description">
              <span>Viagem para a praia</span>
            </div>
          </div>
          <div className="valor">
            <span>R$10,00</span>
          </div>
          <div className="options">
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
