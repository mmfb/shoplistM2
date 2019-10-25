var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:shopListId/items', function(req, res, next) {
    console.log(req.params.shopListId);
    res.send(["Batatas","Cebolas","Pão"]);
});

module.exports = router;
