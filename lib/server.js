import express from 'express';
import config from './config';
import serverRender from './serverRender';

const app = express();

// public directory is statically served, anything inside /public will be served directly
app.use(express.static('public'));

// config express to use ejs as its template language
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const renderedApp = serverRender();
  res.render('index', { tempVar: 3, renderedApp: renderedApp });
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
