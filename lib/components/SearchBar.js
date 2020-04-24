import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };
  debounceSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 500);
  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      // when setState completed, trigger this callback
      this.debounceSearch();
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
