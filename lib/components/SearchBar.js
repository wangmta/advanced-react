import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };
  doSearch = debounce(() => {
    console.log(this.state.searchTerm);
  }, 500);
  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      // when setState completed, trigger this callback
      this.doSearch();
    });
  };
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

export default SearchBar;
