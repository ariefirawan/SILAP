const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const adminRoutes = require('./routes/admin');
const transaksiRoutes = require('./routes/transaksi');

app.use('/transaksi', transaksiRoutes);
app.use(adminRoutes);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bhu6t.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongoose Connected');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
