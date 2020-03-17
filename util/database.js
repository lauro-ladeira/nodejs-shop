const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = cb => {
  MongoClient.connect(
    "mongodb+srv://lauro:(3895902a)@cluster0-3tdzd.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then(client => {
      _db = client.db();
      cb();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw ("No database found!!")
};

exports.mongoConnect = mongoConnect  // para conectar e armazenar essa conexao ao banco de dados e esse metodo continua sendo executado
exports.getDb = getDb; // retorna o acesso a essa database conectada
