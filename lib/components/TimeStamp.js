import React from 'react';
import storeProvider from './storeProvider';

function convertTime(time) {
  return time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

class TimeStamp extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return convertTime(this.props.timeStamp) !== convertTime(nextProps.timeStamp);
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('updating timeStamp component');
  }
  render() {
    return <div>{convertTime(this.props.timeStamp)}</div>;
  }
}

function extraProps(store, originalProps) {
  return {
    timeStamp: store.getState().timeStamp
  };
}

export default storeProvider(extraProps)(TimeStamp);
