const db = require('../db');

module.exports = {
  buscarComentarios: (postCodigo) => new Promise((aceito, rejeitado) => {
    db.query('select * from comentario where postCodigo = ?', [postCodigo], (error, results) => {
      if (error) { rejeitado(error); return; }
      if (results.length > 0) {
        aceito(results);
      } else {
        aceito(false);
      }
    });
  }),
  inserirComentario: (descricao, postCodigo) => new Promise((aceito, rejeitado) => {
    db.query('INSERT INTO comentario (descricao,postCodigo) VALUES (?,?)', [descricao, postCodigo], (error, results) => {
      if (error) { rejeitado(error); return; }
      aceito(results.insertComentario);
    });
  }),
  excluirComentario: (codigo, postCodigo) => new Promise((aceito, rejeitado) => {
    db.query('DELETE FROM comentario WHERE codigo = ? and postCodigo = ?', [codigo, postCodigo], (error, results) => {
      if (error) { rejeitado(error); return; }
      aceito(results);
    });
  }),
};
