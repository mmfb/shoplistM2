var express = require('express');
var router = express.Router();

var items = ["Batatas","Cebolas","Pão"];

/* GET rule */
router.get('/:shopListId/items', function(req, res, next) {
    console.log(req.params.shopListId);
    res.send(items);
});

/* POST rule */
router.post('/:shopListId/items', function(req, res, next) {
    var data = req.body;
    console.log(data);
    items.push(data.item);
    res.send({status:"ok", itemsSize: items.length});
});

module.exports = router;
