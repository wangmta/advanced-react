import express from 'express';
import config from './config';

const app = express();

// public directory is statically served, anything inside /public will be served directly
app.use(express.static('public'));

// config express to use ejs as its template language
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { tempVar: 3 });
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
