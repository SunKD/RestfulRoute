// let mongoose = require('mongoose');
// let Tasks = require('../models/task.js');
// let bp = require('body-parser');

module.exports = () => {
    var Tasks = require('../models/task');
    return {
        readAll: (req, res) => {
            Tasks.find({}, function (err, tasks) {
                if (err) {
                    console.log("err");
                    res.json(err);
                } else {
                    res.json(tasks);
                }
            })
        },

        create: (req, res) => {
            let newTask = new Tasks({
                title: req.body.title,
                description: req.body.description,
            })
            newTask.save(function (err) {
                if (err) {
                    res.json(err);
                }
                res.redirect('/tasks');
            })
        },

        readOne: (req, res) => {
            Tasks.findOne({ _id: req.params.id }, function (err, data) {
                if (err) {
                    res.json(err);
                }
                res.json(data);
            })
        },

        update: (req, res) => {
            let updateInfo = {
                'title': req.body.title,
                'description': req.body.description,
                'completed': req.body.completed
            }
            Tasks.updateOne({ _id: req.params.id }, updateInfo, function (err, datas) {
                if (err) {
                    res.json(err);
                } res.json(datas);
            })
        },

        delete: (req, res) => {
            Tasks.deleteOne({ _id: req.params.id }, function (err, datas) {
                if (err) {
                    res.json(err);
                }
                res.json(datas);
            })
        }
    }
}