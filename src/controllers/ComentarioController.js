const ComentarioService = require('../services/ComentarioService');

module.exports = {
  buscarComentarios: async (req, res) => {
    const json = { error: '', result: [] };

    const { postCodigo } = req.params;
    const comentarios = await ComentarioService.buscarComentarios(postCodigo);

    if (comentarios) {
      json.result = comentarios;
    }

    res.json(json);
  },
  inserirComentario: async (req, res) => {
    const json = { error: '', result: [] };

    const { descricao } = req.body;
    const PostCodigo = req.params.postCodigo;

    if (descricao && PostCodigo) {
      const comentarioCodigo = await ComentarioService.inserirComentario(descricao, PostCodigo);
      json.result = {
        codigo: comentarioCodigo,
        descricao,
        postCodigo: PostCodigo,
      };
    } else {
      json.error = 'Campos não enviados';
    }
    res.json(json);
  },
  excluirComentario: async (req, res) => {
    const json = { error: '', result: [] };

    const postCodigo = req.params.postCodigo;
    const { codigo } = req.body;

    await ComentarioService.excluirComentario(codigo, postCodigo);

    res.json(json);
  },
};
