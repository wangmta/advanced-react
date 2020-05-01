import React from 'react';
import pickBy from 'lodash.pickby';

// import StateApi from 'state-api';
// import { data } from '../testData';
// import axios from 'axios';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';
// not supported by react 16
// import Perf from 'react-addons-perf';

// if (typeof window === undefined) {
//   window.Perf = Perf;
// }

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

  // don't subsribe all states
  // only subscribe to the store properties needed, so only when articles or searchTerm changes, the App component will re-render
  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  };

  state = this.appState();
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
    this.setState(this.appState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStateChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      // pickBy can filter objects
      articles = pickBy(articles, (value, key) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <div>
        {/* <TimeStamp timeStamp={this.state.timeStamp} /> */}
        <TimeStamp />
        {/* <SearchBar doSearch={this.props.store.setSearchTerm} /> */}
        <SearchBar />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}

export default App;
