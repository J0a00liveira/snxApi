const PostService = require('../services/PostService');

module.exports = {
  buscarPosts: async (req, res) => {
    const json = { error: '', result: [] };

    const posts = await PostService.buscarPosts();

    for (const i in posts) {
      json.result.push({ codigo: posts[i].codigo, titulo: posts[i].titulo });
    }
    res.json(json);
  },

  buscarUmPost: async (req, res) => {
    const json = { error: '', result: [] };

    const codigo = req.params;
    const post = await PostService.buscarUmPost(codigo);

    if (post) {
      json.result = post;
    }

    res.json(json);
  },

  inserirPost: async (req, res) => {
    const json = { error: '', result: [] };

    const titulo = req.body.titulo;

    if (titulo) {
      const postCodigo = await PostService.inserirPost(titulo);
      json.result = {
        codigo: postCodigo,
        titulo
      };
    } else {
      json.error = 'Campos não enviados';
    }
    res.json(json);
  },

  alterarPost: async (req, res) => {
    const json = { error: '', result: [] };

    const { codigo } = req.params;
    const { titulo } = req.body;

    if (codigo && titulo) {
      await PostService.alterarPost(codigo, titulo);
      json.result = {
        codigo,
        titulo,
      };
    } else {
      json.error = 'Campos não enviados';
    }
    res.json(json);
  },
  
  excluirPost: async (req, res) => {
    const json = { error: '', result: [] };

    await PostService.excluirPost(req.params.codigo);

    res.json(json);
  },

};
