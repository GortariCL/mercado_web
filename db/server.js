const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3000;

//SETTINGS
app.listen(port, () => {
    console.log(`SERVER ON  => ${port}`);
});

//Integracion handlebars (motor de plantillas)
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname,'../views', 'layouts'));

//Configuración
app.engine(
    'handlebars',
    exphbs.engine({
        defaultLayout: 'main',
        layoutsDir: app.get('views'),
        partialsDir: path.join(__dirname,'..','/views/components')
    })
);

//Requerimiento 5
//Midleware Bootstrap
app.use('/css', express.static(path.join(__dirname,'..','/node_modules/bootstrap/dist/css')));

//Midleware Bootstrap JS
app.use('/js', express.static(path.join(__dirname,'..','/node_modules/bootstrap/dist/js')));

//Midleware JQuery
app.use('/dist', express.static(path.join(__dirname,'..','/node_modules/jquery/dist')));

//Midleware assets
app.use('/assets', express.static(path.join(__dirname,'..','/assets')));

//Midleware img
app.use('/img', express.static(path.join(__dirname,'..','/assets/img/')));

//Routes
app.use(require('../routes/router'));