exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method= "POST">
        Nome: <input type="text" name="nome">
        Outro Campo: <input type="text" name="aquioutrocampo">
        <button>Enviar</button>
        </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Sou uma nova rota.');
};