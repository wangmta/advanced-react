import express from 'express';
import config from './config';
import serverRender from './renderers/server';
// express can load json format
import * as testData from './testData.json';

const app = express();

// public directory is statically served, anything inside /public will be served directly
app.use(express.static('public'));

// config express to use ejs as its template language
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const renderedApp = await serverRender();
  res.render('index', { tempVar: 3, renderedApp: renderedApp });
});

app.get('/data', (req, res) => {
  res.send(testData);
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
