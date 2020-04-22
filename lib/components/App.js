import React from 'react';

// import StateApi from 'state-api';
// import { data } from '../testData';
// import axios from 'axios';
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
  state = this.props.store.getState();

  // comment out to avoid rendering twice
  // async componentDidMount() {
  //   const response = await axios.get('/data');

  //   const api = new StateApi(response.data.data);
  //   this.setState(() => ({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   }));
  // }

  // articleActions = {
  //   lookupAuthor: authorId => this.state.authors[authorId]
  // };

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} store={this.props.store} />
      </div>
    );
  }
}

export default App;
