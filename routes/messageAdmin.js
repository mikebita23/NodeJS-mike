var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.sendFile('messagesAdmin.html', { root: __views})
});


module.exports = router;