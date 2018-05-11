
const c = require('../controllers/tasks')();
// let bp = require('body-parser');
// let mongoose = require('mongoose');


module.exports = (app) => {

    app.get('/tasks', function (req, res) {
        c.readAll(req, res);
    })

    app.post('/tasks', function (req, res) {
        c.create(req, res);
    })

    app.get('/tasks/:id', function (req, res) {
        c.readOne(req, res);
    })

    app.put('/tasks/:id', function (req, res) {
        c.update(req, res);
    });

    app.delete('/tasks/:id', function (req, res) {
        c.delete(req, res);
    })


}