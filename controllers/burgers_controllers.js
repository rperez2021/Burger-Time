var express = require('express');
var router = express.Router()
const controller_burger = require('../models/burger.js')


router.get("/", (req, res) => {
    controller_burger.select_all(function(data){
            var handlebars_data = {
                burgers: data
            };
            res.render("index", handlebars_data)
        })
});

router.post('/burgers', function (req, res) {
    controller_burger.insert([
        'burger_name'
    ], [
        req.body.burger_name
    ], function (data) {
        res.redirect('/');
    });
});

router.post('/burgers/:id', function (req, res) {
    var condition = req.params.id;
    controller_burger.update(
            ['id'], [condition],
        function (data) {
            res.redirect('/');
        });
});


module.exports = router;