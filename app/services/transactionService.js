const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const findAll = async () => {
  try {
    const transactions = await TransactionModel.find({});
    console.log(transactions);
    return transactions;
  } catch (err) {
    console.log('erro em findAll');
  }
};

module.exports = findAll;
