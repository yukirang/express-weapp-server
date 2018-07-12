let fs = require('fs')
let express = require('express');
let router = express.Router();
let app = express();

app.use(express.static(__dirname + '/public'))

router.get('/drivers',function(req,res,next){
  let file = './f1.json';
  console.log(file);
  let result = JSON.parse(fs.readFileSync(file)).drivers;
  res.send(result);
});

router.get('/teams',function(req,res,next){
  let file = './f1.json';
  console.log(file);
  let result = JSON.parse(fs.readFileSync(file)).teams;
  res.send(result);
});



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
