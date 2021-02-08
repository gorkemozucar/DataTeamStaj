const express = require ('express');
const path = require ('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members =require('./Members');

const app = express();



//handlebar kullanimi
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Homepage Route
app.get('/', (req,res) => res.render('index', {
    title:'Uye Uygulamasi',
    members

}));




// app.get('/', (req,res) => {
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//static dosya
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
