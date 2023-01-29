const db = require('../db');

module.exports = {
  buscarPosts: () => new Promise((aceito, rejeitado) => {
    db.query('select * from post', (error, results) => {
      if (error) {
        rejeitado(error); return;
      }
      aceito(results);
    });
  }),

  buscarUmPost: (codigo) => new Promise((aceito, rejeitado) => {
    db.query('SELECT * FROM POST WHERE CODIGO = ?', [codigo], (error, results) => {
      if (error) { rejeitado(error); return; }
      if (results.length > 0) {
        aceito(results[0]);
      } else {
        aceito(false);
      }
    });
  }),

  inserirPost: (titulo) => { return new Promise((aceito, rejeitado) => {
    db.query('INSERT INTO POST (titulo) VALUES (?)', [titulo], (error, results) => {
      if (error) { rejeitado(error); return; }
      aceito(results.inserirPost);
    });
  })
},

  alterarPost: (codigo, titulo) => new Promise((aceito, rejeitado) => {
    db.query('UPDATE post SET titulo = ? where codigo = ?', [titulo, codigo], (error, results) => {
      if (error) { rejeitado(error); return; }
      aceito(results);
    });
  }),

  excluirPost: (codigo) => new Promise((aceito, rejeitado) => {
    db.query('DELETE FROM post WHERE codigo = ?', [codigo], (error, results) => {
      if (error) { rejeitado(error); return; }
      aceito(results);
    });
  }),
};
