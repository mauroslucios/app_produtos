const express =  require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const frontend = require('./routes/frontend');
const db = require('./database/connection');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

//configurações
    //sessão
        app.use(session({
            secret: 'P@sSW0r4',
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    //middlaware e flash
            app.use((req, res, next) => {
            //criando variável global
            res.locals.success_msg = req.flash('success_msg');
            res.locals.error_msg = req.flash('error_msg');
            //Passará pelo middlaware e não ficará parado
            next();
        });  
    //body parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //handlebars
        app.engine('handlebars',handlebars({defaultLayout: 'main'}));
        app.set('view engine','handlebars');
    
    //public static
        app.use(express.static(path.join(__dirname,'/public')));

//basicRoutes
     //whitout prefix
    //app.get('/', (req, res) => {
        //res.send('Rota Principal')     
     //})   
    /**---------------------------------------------------- */
    //adminRoutes prefix
    app.use('/admin',admin)

    //frontendRoutes prefix
    app.use('/', frontend)

//outros
const PORT = 3000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);