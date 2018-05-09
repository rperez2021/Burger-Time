var express = require('express');
var router = express.Router()
const burger = require('../models/burger.js')


router.get("/", (req, res) => {
    burger.findAll({
    }).then(function(result) {
        var handlebars_data = {burgers: result}
        console.log(result[0])
        console.log(result.dataValues)
        res.render("index", handlebars_data)
    }).catch(function(error) {
        console.log(error)
    })
});

router.post('/burgers', (req, res) => {
    burger.create({
        burger_name: req.body.burger_name
    }).then(()=> {
        res.redirect('/');
    }).catch(function(error) {
        console.log(error)
    })
});

router.post('/burgers/:id', function (req, res) {
    burger.update({
        devoured: true,
    },
    {where: {id: req.params.id}})
    .then(function(result) {
        res.redirect('/')
    }).catch(function(error) {
        console.log(error)
    })
});

router.post('/burgers/re_add/:id', function (req, res) {
    burger.update({
        devoured: false,
    },
    {where: {id: req.params.id}})
    .then(function(result) {
        res.redirect('/')
    }).catch(function(error) {
        console.log(error)
    })
});

module.exports = router;