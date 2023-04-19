const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');

const hbs = exphbs.create({});

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});






