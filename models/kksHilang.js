const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeString = { type: String, required: true };
const typeNumber = { type: Number, required: true };

const kksHilangSchema = new Schema({
  noKartu: typeNumber,
  noKartuBaru: typeNumber,
  nmPemilikRek: typeString,
  status: { type: String, default: 'Rusak/Hilang' },
  kpm: {
    nmPengurus: typeString,
    pengurusId: { type: Schema.Types.ObjectId, ref: 'Kpm' },
  },
});



module.exports = mongoose.model('kksHilang', kksHilangSchema);
