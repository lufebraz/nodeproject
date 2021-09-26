const connection = require('../database/connection');

class Services {
  add(service, res) {
    const registerDate = new Date();
    service.date = new Date(service.date);
    const serviceDate = { ...service, registerDate }

    const isDateOk = service.date >= registerDate;
    const validClient = (service.client.length >= 5);
    

    const validations = [
      {
        name: 'date',
        validated: isDateOk,
        message: 'date not valid. it must not be in the past'
      },
      {
        name: 'client',
        validated: validClient,
        message: 'client not valid. at least 5 char'
      }
    ]

    const erros = validations.filter(e => !e.validated);
    const existErros = erros.length;

    if (existErros) {
      res.status(400).json(erros);
    } else {


      const sql = ' INSERT INTO Calls SET ?'

      connection.query(sql, serviceDate, (erro, results) => {


        if (erro) {

          res.status(400).json(erro)

        } else {
          results.message = "Agendado!"
          res.status(201).json(results)

        }
      })
    }
  }
}

module.exports = new Services;