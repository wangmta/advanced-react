import React from 'react';

import DataApi from '../dataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

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
    return (
      <div>
        <ArticleList articles={this.state.articles} authors={this.state.authors} />
      </div>
    );
  }
}

export default App;
