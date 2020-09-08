import React, { useState, useEffect } from 'react';
import './style.css';

import TransactionService from '../../services/TransactionService';

export default function Container() {
  const [yearMonth, setYearMonth] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    // fazer consulta no banco e retornar os periodos
    const getPeriods = async () => {
      const periods = await TransactionService.getAll();
      setPeriods(periods.data);
    };
    const getTransactions = async () => {
      const filteredTransactions = await TransactionService.get(yearMonth);
      setTransactions(filteredTransactions.data);
    };
    const date = new Date();
    let month = date.getMonth() + 1;
    month.toString().length === 1 ? (month = '0' + month) : (month = month);
    const year = date.getFullYear().toString();

    setYearMonth(`${year}-${month}`);
    getPeriods();
    getTransactions();
  }, []);

  const handleChangeSelect = async (event) => {
    //tras as transactions de acordo com o periodo selecionado

    setYearMonth(event.target.value);
    const filteredTransactions = await TransactionService.get(
      event.target.value
    );
    setTransactions(filteredTransactions.data);
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
            {periods.map((period, key) => {
              return <option key={key}>{period}</option>;
            })}
          </select>
        </label>
        <div>
          <button>&gt;</button>
        </div>
      </form>
      {/* INFOS FILTRO */}
      <div className="resume">
        <span>Lançamentos: {transactions.length} </span>
        <span>
          Receitas: R$
          {transactions
            .filter((transaction) => transaction.type === '+')
            .reduce((acc, curr) => acc + curr.value, 0)}
        </span>
        <span>
          Despesas: R$
          {transactions
            .filter((transaction) => transaction.type === '-')
            .reduce((acc, curr) => acc + curr.value, 0)}
        </span>
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
        {transactions.map((transaction, key) => {
          const { category, description, value, type } = transaction;
          const styles = type === '-' ? 'negative' : 'positive';

          return (
            <div key={key} className={`transaction ${styles}`}>
              <div className="number">
                <span>{key + 1}</span>
              </div>
              <div className="info">
                <div className="category">
                  <span>{category}</span>
                </div>
                <div className="description">
                  <span>{description}</span>
                </div>
              </div>
              <div className="valor">
                <span>{value}</span>
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
        })}
      </div>
    </div>
  );
}
