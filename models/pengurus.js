const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeString = { type: String, required: true };
const typeNumber = { type: Number, required: true };

const pengurusSchema = new Schema(
  {
    noPeserta: typeNumber,
    status: typeString,
    tahap: { type: String },
    alamat: typeString,
    provinsi: typeString,
    kota: typeString,
    kel: typeString,
    kec: typeString,
    pengurusBaru: {
      nmpengurus: typeString,
      nik: typeNumber,
      noKK: typeNumber,
      tempatLahir: typeString,
      tglLahir: { type: Date, default: Date.now },
      jk: typeString,
      namaIbu: typeString,
    },

    pengurusLama: {
      nmpengurus: typeString,
      nik: typeNumber,
      noKK: typeNumber,
      tempatLahir: typeString,
      tglLahir: { type: Date, default: Date.now },
      jk: typeString,
      namaIbu: typeString,
    },

    alasanPerubahan: typeString,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pengurus', pengurusSchema);
