var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');
var bodyParser = require("body-parser");
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, 'D:/image');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage});

/* GET users listing. */
router.get('/', async function(req, res, next) {
    res.render('home', { title: 'Express' });
});

router.post('/', upload.array('file', 12),function (req, res) {

   res.send('upload djt me thanh cong');
});

module.exports = router;
