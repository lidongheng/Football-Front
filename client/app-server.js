var express = require('express');
var port = 8088;
var app = express();

var router = express.Router();
router.get('/', function(req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

//定义static目录，指向./dist目录
app.use(express.static('./dist'));

//启动express
module.express = app.listen(port, function(err){
  if(err){
    console.log(err);
    return null;
  }
  console.log('http://localhost:'+port+'\n');
})
