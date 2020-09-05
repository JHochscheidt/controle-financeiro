const express = require('express');
const transactionRouter = express.Router();
const findTransactionByPeriod = require('../services/transactionService');
const TransactionModel = require('../models/TransactionModel');

//retorna transaction de acordo com a queryParam yyyy-dd (ano-mes)
//se nao for passado periodo por parametro nao retorna nada
transactionRouter.get('/', async (req, res) => {
  const { period } = req.query;
  if (!period) res.send('O período é obrigatório. Ex.: ?period=yyyy-mm');
  try {
    const transactions = await findTransactionByPeriod(period);
    res.send(transactions);
  } catch (err) {
    res.send(err);
  }
});

module.exports = transactionRouter;
