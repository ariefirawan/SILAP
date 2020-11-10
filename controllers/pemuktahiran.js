const Pengurus = require('../models/pengurus');

exports.addPengurus = (req, res, next) => {
  const { noPeserta, status, alamat, provinsi, kota, kec, kel } = req.body;
  const pengurusBaru = {
    nmpengurus: req.body.pengurusBaru.nmpengurus,
    noKK: req.body.pengurusBaru.noKK,
    nik: req.body.pengurusBaru.nik,
    tempatLahir: req.body.pengurusBaru.tempatLahir,
    tglLahir: new Date(req.body.pengurusBaru.tglLahir),
    jk: req.body.pengurusBaru.jk,
    namaIbu: req.body.pengurusBaru.namaIbu,
  };
  const pengurusLama = {
    nmpengurus: req.body.pengurusLama.nmpengurus,
    noKK: req.body.pengurusLama.noKK,
    nik: req.body.pengurusLama.nik,
    tempatLahir: req.body.pengurusLama.tempatLahir,
    tglLahir: new Date(req.body.pengurusLama.tglLahir),
    jk: req.body.pengurusLama.jk,
    namaIbu: req.body.pengurusLama.namaIbu,
  };
  const alasanPerubahan = req.body.alasanPerubahan;

  pengurus = new Pengurus({
    noPeserta,
    status,
    alamat,
    provinsi,
    kota,
    kec,
    kel,
    pengurusBaru,
    pengurusLama,
    alasanPerubahan,
  });
  pengurus
    .save()
    .then((json) => {
      console.log(json);
      res.status(200).json({
        result: json,
      });
    })
    .catch((err) => console.error(err));
};
