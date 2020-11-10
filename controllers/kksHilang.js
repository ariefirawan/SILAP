const KKS = require('../models/kksHilang');
const Kpm = require('../models/kpm');

exports.addKksHilang = (req, res, next) => {
  const { noKartu, noKartuBaru, nmPemilikRek, status, noRek } = req.body;
  const kpm = {
    nmPengurus: req.body.kpm.nmPengurus,
    pengurusId: req.body.kpm.pengurusId,
  };

  kks = new KKS({ noKartu, noKartuBaru, nmPemilikRek, status, noRek, kpm });
  kks
    .save()
    .then((data) => {
      Kpm.findById(kpm.pengurusId)
        .then((items) => {
          const cariKartu = items.KKS.findIndex((item) => {
            return item.noKartu.toString() === data.noKartu.toString();
          });

          const updateKartu = [...items.KKS];
          if (cariKartu >= 0) {
            updateKartu[cariKartu].status = data.status;
          }
          updateKartu.push({
            noKartu: data.noKartuBaru,
            status: 'aktif',
            noRek: data.noRek,
            nmPemilikRek: data.nmPemilikRek,
          });
          items.KKS = updateKartu;
          items.save();
          res.status(200).json({
            result: data,
          });
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.err(err));
};
