const express = require('express');

const router = express.Router();
const PostController = require('./controllers/PostController');
const ComentarioController = require('./controllers/ComentarioController');

router.get('/posts', PostController.buscarPosts);
router.get('/posts/:codigo', PostController.buscarUmPost);
router.post('/posts', PostController.inserirPost);
router.put('/posts/:codigo', PostController.alterarPost);
router.delete('/posts/:codigo', PostController.excluirPost);

router.get('/post/comentarios/:postCodigo', ComentarioController.buscarComentarios);
router.post('/post/comentarios/:postCodigo', ComentarioController.inserirComentario); 
router.delete('/post/comentarios/:postCodigo', ComentarioController.excluirComentario);

module.exports = router;
