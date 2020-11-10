// const getDb = require('../util/database').getDb;

// class Kpm {
//   constructor(data) {
//     this.data = data;
//   }
//   save() {
//     const db = getDb();

//     return db
//       .collection('masterpeserta')
//       .insertMany(this.data)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => console.log(err));
//   }
// }

// module.exports = Kpm;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeString = { type: String, required: true };
const typeNumber = { type: Number, required: true };

const kpmSchema = new Schema({
  NOPESERTA: typeNumber,
  NMPENGURUS: typeString,
  NIKPENGURUS: typeNumber,
  NAMA_PEMILIK_REKENING: typeString,
  BANK: typeString,
  KDPROP: typeNumber,
  KDKABU: typeNumber,
  KDKECA: typeNumber,
  KDKELR: typeNumber,
  NMPROP: typeString,
  NMKABU: typeString,
  NMKECA: typeString,
  NMKELR: typeString,
  KKS: [
    {
      noKartu: typeNumber,
      status: typeString,
      noRek: typeNumber,
      nmPemilikRek: { type: String },
    },
  ],
});

kpmSchema.methods.updateKks = function (kks) {
  const caritKartu = this.KKS.map.findIndex((i) => {
    return i.noKartu === kks.noKartu;
  });
  const updateKKS = [...this.KKS];

  if (caritKartu) {
    updateKKS[caritKartu].status = kks.status;
    updateKKS.push(kks);
  }

  this.KKS = updateKKS;
  return this.save();
};

module.exports = mongoose.model('Kpm', kpmSchema);
