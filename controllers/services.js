//configurando rotas
const Services = require('../models/services')

module.exports = app => {
  app.get('/services', (req, res) => res.send('you are at services'));

  app.post('/services', (req, res) => {
    const service = req.body;

    Services.add(service, res);

  })
}