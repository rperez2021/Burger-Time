const controller_burger = require('../models/burger.js')

module.exports = (router) => {
    router.get("/", (req, res) => {
        controller_burger.select_all()
        .then ((data) => {
            res.render("index", data)
        })
    })
}