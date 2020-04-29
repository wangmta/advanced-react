import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  };
  debounceSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 500);
  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      // when setState completed, trigger this callback
      this.debounceSearch();
    });
  };

  // this func cannot be used with PureComponent
  // PureComponent will check if the state has changed or not
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('searchBar component is updating');
  }

  render() {
    return (
      <input
        type="search"
        placeholder="enter search term"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
      />
    );
  }
}

export default storeProvider()(SearchBar);
