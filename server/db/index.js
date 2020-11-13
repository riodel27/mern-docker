const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo:27018/cinema';

mongoose.connect(connectionString, { useNewUrlParser: true ,useUnifiedTopology: true}).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
