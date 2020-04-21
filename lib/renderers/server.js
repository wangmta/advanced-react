import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App';

import axios from 'axios';
import DataApi from 'data-api';
import config from '../config';

const serverRender = async () => {
  // need to use absolute path when rendering in server side
  const response = await axios.get(`http://${config.host}:${config.port}/data`);

  const api = new DataApi(response.data.data);
  const initialState = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };
  return ReactDOMServer.renderToString(<App initialState={initialState} />);
};

export default serverRender;
