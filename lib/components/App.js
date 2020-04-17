import React from 'react';

import DataApi from '../dataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  render() {
    return <div>...</div>;
  }
}

export default App;
