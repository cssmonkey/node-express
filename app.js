var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

bookRouter.route('/')
  .get(function(req, res){
    res.send('Hello books');
  });

bookRouter.route('/single')
  .get(function(req, res){
    res.send('Hello single book');
  });

app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {
      title: 'App title goes here',
      nav: [{
        Link: '/Books',
        Text: 'Books'
      }, {
        Link: '/Authors',
        Text: 'Authors'
      }]
    });
});


app.listen(port, function(err){
    console.log('running server on port' + port);
});
