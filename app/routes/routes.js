const express = require('express');
const transactionRouter = express.Router();
const TransactionService = require('../services/transactionService');
const TransactionModel = require('../models/TransactionModel');

//retorna transaction de acordo com a queryParam yyyy-dd (ano-mes)
//se nao for passado periodo por parametro nao retorna nada
transactionRouter.get('/', async (req, res) => {
  const { period } = req.query;
  if (!period) res.send('O período é obrigatório. Ex.: ?period=yyyy-mm');
  try {
    const transactions = await TransactionService.findTransactionByPeriod(
      period
    );
    res.send(transactions);
  } catch (err) {
    res.send(err);
  }
});

//cria nov transaction
transactionRouter.post('/', async (req, res) => {
  const newTransaction = req.body;
  if (!newTransaction) res.send('Informe os dados da nova transaction');
  try {
    const InsertedTransaction = await TransactionService.createTransaction(
      newTransaction
    );
    res.send(InsertedTransaction);
  } catch (err) {
    res.send(err);
  }
});

module.exports = transactionRouter;
