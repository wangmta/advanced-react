import React from 'react';
import PropTypes from 'prop-types';

// make extraProps an optional function that return a default {}
const storeProvider = (extraProps = () => ({})) => Component => {
  // most of the time the higher order comp returns class comp, so it can access life cycle events
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return (
        <Component
          {...this.props}
          {...extraProps(this.context.store, this.props)}
          store={this.context.store}
        />
      );
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
