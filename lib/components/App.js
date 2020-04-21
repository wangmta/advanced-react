import React from 'react';

import DataApi from 'data-api';
// import { data } from '../testData';
import axios from 'axios';
import ArticleList from './ArticleList';

class App extends React.Component {
  // this is synced, cannot perform async calls
  // constructor() {
  //   super();
  //   this.state = {
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   };
  // }

  //set initial state from dom.js, because componentDidMount is async, there's delay
  state = {
    articles: this.props.initialState.articles,
    authors: this.props.initialState.authors
  };

  async componentDidMount() {
    const response = await axios.get('/data');

    const api = new DataApi(response.data.data);
    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} articleActions={this.articleActions} />
      </div>
    );
  }
}

export default App;
