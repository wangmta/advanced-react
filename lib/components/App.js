import React from 'react';
import pickBy from 'lodash.pickby';

// import StateApi from 'state-api';
// import { data } from '../testData';
// import axios from 'axios';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

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
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

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
  // managed by store-api
  // setSearchTerm = searchTerm => {
  //   this.setState({ searchTerm });
  // };
  onStateChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStateChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      // pickBy can filter objects
      articles = pickBy(articles, (value, key) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}

export default App;
