const Kpm = require('../models/kpm');

const peserta = require('../data/pkh');

exports.postAddMaster = (req, res, next) => {
  Kpm.insertMany(peserta).then((result) => {
    res.status('success');
  });
};

exports.getAllKpm = (req, res, next) => {
  Kpm.find()
    .then((peserta) => {
      res.status(201).json({
        kpm: peserta,
      });
    })
    .catch((err) => console.log(err));
};

exports.addPengurus = (req, res, next) => {
  
}
