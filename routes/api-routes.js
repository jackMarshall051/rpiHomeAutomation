const { response } = require("express");


module.exports = function (app) {
    app.post('/api/deviceNames', (req, res) => {
        var output = JSON.parse(req.body.output);
        console.log(output);
    });

};