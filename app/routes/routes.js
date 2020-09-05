const express = require('express');
const transactionRouter = express.Router();
const findAll = require('../services/transactionService');

// rota inicial da api
transactionRouter.get('/', async (req, res) => {
  try {
    const transactions = await findAll();
    res.send(transactions);
  } catch (err) {
    res.send(err);
  }
});

module.exports = transactionRouter;
