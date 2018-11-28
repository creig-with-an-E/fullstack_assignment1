var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.write('index');
    res.end();
});

module.exports = router;