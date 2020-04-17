export default class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapToObject(arr) {
    return arr.reduce((accu, curr) => {
      accu[curr.id] = curr;
      return accu;
    }, {});
  }

  getArticles() {
    return this.mapToObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapToObject(this.rawData.authors);
  }
}
