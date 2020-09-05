const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

// filtra transactions por yyyy-dd
exports.findTransactionByPeriod = async (period) => {
  try {
    const transactions = await TransactionModel.find(
      { $or: [{ yearMonth: period }, { yearMonthDay: period }] },
      { _id: 0 }
    );
    return transactions;
  } catch (err) {
    console.log('erro em findAll');
  }
};

exports.createTransaction = async (newTransaction) => {
  try {
    const insertedTransaction = new TransactionModel(newTransaction);
    await insertedTransaction.save();
    return insertedTransaction;
  } catch (err) {
    console.log(err);
    return;
  }
};
