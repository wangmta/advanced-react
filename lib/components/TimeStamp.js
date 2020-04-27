import React from 'react';
import storeProvider from './storeProvider';

class TimeStamp extends React.Component {
  render() {
    return <div>{this.props.timeStamp.toString()}</div>;
  }
}

function extraProps(store, originalProps) {
  return {
    timeStamp: store.getState().timeStamp
  };
}

export default storeProvider(extraProps)(TimeStamp);
