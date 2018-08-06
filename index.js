//je déclare l'ensemble des librairies nécessaires
const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const mysql = require('mysql2');
const connection = require('./helpers/db.js');
const authRouter = require('./routes/auth/auth.js');

const app = express()

//la configuration

//je configure l'application
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello')
})

//le fonctionnel

//j'implémentation la partie API

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
    var  err  =  new  Error('Not Found');
    err.status  =  404;
    next(err);
});

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  3247, function(){
    console.log('Listening on port '  +  server.address().port);
});