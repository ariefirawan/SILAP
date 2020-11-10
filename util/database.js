const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://abusalman:QCm8DaKEkpjCXd9w@cluster0.bhu6t.mongodb.net/silapdb?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log('Database Connected');
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
