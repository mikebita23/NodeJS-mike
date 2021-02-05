var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile('messages.html', { root: __views})
});
/* GET users listing. */
router.get('/:id', function(req, res, next) {
    res.sendFile('message.html', { root: __views})
});



module.exports = router;