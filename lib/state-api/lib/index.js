export default class StateApi {
  constructor(rawData) {
    this.state = {
      articles: this.mapToObject(rawData.articles),
      authors: this.mapToObject(rawData.authors),
      searchTerm: ''
    };
  }

  mapToObject(arr) {
    return arr.reduce((accu, curr) => {
      accu[curr.id] = curr;
      return accu;
    }, {});
  }

  //   getArticles() {
  //     return this.mapToObject(this.rawData.articles);
  //   }

  //   getAuthors() {
  //     return this.mapToObject(this.rawData.authors);
  //   }
  lookupAuthor = authorId => {
    return this.state.authors[authorId];
  };

  getState = () => {
    return this.state;
  };
}
