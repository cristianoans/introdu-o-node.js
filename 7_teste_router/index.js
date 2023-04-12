const express = require('express');
const app = express();
const usuariosRouter = require('./routes/usuariosRoutes');

// Home page
app.get('/', function (req, res) {
  res.send(`<h1>Home</h1>`);
});

app.use('/usuarios', usuariosRouter);

app.listen(3000, () => {
    console.log(`Server iniciado http://localhost:3000/`)
});
