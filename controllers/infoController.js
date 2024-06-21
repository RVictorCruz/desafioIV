const InfoModel = require("../models/infoModel");

class InfoController {
  static getAll(req, res) {
    InfoModel.getAll((err, rows) => {
      if (err) {
        return res.status(500).send("Erro ao obter informações");
      }
      res.json(rows);
    });
  }

  static getById(req, res) {
    const id = req.params.id;
    InfoModel.getById(id, (err, row) => {
      if (err) {
        return res.status(500).send("Erro ao obter informações");
      }
      if (!row) {
        return res
          .status(404)
          .send("Índice fornecido está fora dos limites válidos");
      }
      res.json(row);
    });
  }
  //testando o branch nova

  static create(req, res) {
    const info = req.body;
    InfoModel.create(info, (err, lastID) => {
      if (err) {
        return res.status(500).send("Erro ao criar informação");
      }
      res.status(201).send(`Informação criada com ID: ${lastID}`);
    });
  }

  static update(req, res) {
    const id = req.params.id;
    const info = req.body;
    InfoModel.update(id, info, (err, changes) => {
      if (err) {
        return res.status(500).send("Erro ao atualizar informação");
      }
      if (changes === 0) {
        return res
          .status(404)
          .send("Índice fornecido está fora dos limites válidos");
      }
      res.send(`Informação com ID: ${id} atualizada`);
    });
  }

  static delete(req, res) {
    const id = req.params.id;
    InfoModel.delete(id, (err, changes) => {
      if (err) {
        return res.status(500).send("Erro ao apagar informação");
      }
      if (changes === 0) {
        return res
          .status(404)
          .send("Índice fornecido está fora dos limites válidos");
      }
      res.send(`Informação com ID: ${id} apagada`);
    });
  }
}

module.exports = InfoController;
