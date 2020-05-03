import React from 'react';
import PropTypes from 'prop-types';

// make extraProps an optional function that return a default {}
const storeProvider = (extraProps = () => ({})) => Component => {
  // most of the time the higher order comp returns class comp, so it can access life cycle events
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    };

    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.usedState());
      }
    };

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return <Component {...this.props} {...this.usedState()} store={this.context.store} />;
    }
  };
  // create a container component.
  //   const WithStore = (props, { store }) => <Component {...props} store={store} />;
  //   WithStore.contextTypes = {
  //     store: PropTypes.object
  //   };
  //   return WithStore;
};

export default storeProvider;
