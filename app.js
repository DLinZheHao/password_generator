const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

const viewRoutes = require('./routes/viewRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));

// 引用環境變數
dotenv.config({ path: './config.env' });

// view template setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// public folder read
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});
