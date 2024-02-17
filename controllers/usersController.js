const index = (res, req) => {
    console.log('index usersController');
    res.send('respuesta desde controlador')
};

module.exports = {
    index
}