import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App';

import axios from 'axios';
import StateApi from 'state-api';
import config from '../config';

const serverRender = async () => {
  // need to use absolute path when rendering in server side
  const response = await axios.get(`http://${config.host}:${config.port}/data`);

  const store = new StateApi(response.data.data);
  // const initialState = {
  //   articles: api.getArticles(),
  //   authors: api.getAuthors()
  // };
  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialState: response.data.data
  };
};

export default serverRender;
