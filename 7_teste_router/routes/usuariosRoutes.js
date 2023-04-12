const express = require('express');
const usuarios = require('../../1_modules/modulo_usuarios');
const app = express();

const usuariosRouter = express.Router();
usuariosRouter.get('/', (req, res) => {
    res.json(usuarios)
});

usuariosRouter.get('/search', (req, res) => {
    const { nome, email } = req.query;

    if (nome || email) {
        if(nome){
            const usuario = usuarios.find(usuario => usuario.nome.toLowerCase() === nome.toLowerCase());
            if(usuario){
                return res.json(usuario);
            } else {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } else if(email){
            const usuario = usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase())
            if(usuario){
                return res.json(usuario);
            } else {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
        }
    } else{
        return res.status(400).json({ error: 'Informe pelo menos um parâmetro válido' });
    }

});

module.exports = usuariosRouter;