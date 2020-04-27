export default class StateApi {
  constructor(rawData) {
    this.state = {
      articles: this.mapToObject(rawData.articles),
      authors: this.mapToObject(rawData.authors),
      searchTerm: '',
      timeStamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
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

  setSearchTerm = searchTerm => {
    this.mergeWithState({ searchTerm });
  };

  subscribe = callback => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  mergeWithState = stateChange => {
    this.state = {
      ...this.state,
      ...stateChange
    };
    this.notifyAllSubsribers();
  };

  notifyAllSubsribers = () => {
    Object.values(this.subscriptions).forEach(callback => callback());
  };

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({ timeStamp: new Date() });
    }, 1000);
  };
}
