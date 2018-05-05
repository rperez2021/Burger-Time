const controller_burger = require('../models/burger.js')

module.exports = (router) => {
    router.get("/", (req, res) => {
        controller_burger.select_all()
            .then((data) => {
                var handlebars_data = {
                    burgers: data
                };
                res.render("index", handlebars_data)
            })
    });
    router.post('/burgers', function (req, res) {
        burger.insert([
            'burger_name'
        ], [
            req.body.burger_name
        ], function (data) {
            res.redirect('/');
        });
    });
    router.put('/burgers/:id', function (req, res) {
        var condition = 'id = ' + req.params.id;
        burger.update([
            'burger_name'
        ],
            condition, function (data) {
            res.redirect('/');
        });
    });
}