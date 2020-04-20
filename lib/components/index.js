import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
// class App extends React.Component {
//   // stage-2 feature, class property
//   state = { answer: 36 };
//   asycFunc = () => Promise.resolve(52);
//   async componentDidMount() {
//     this.setState({ answer: await this.asycFunc() });
//   }
//   render() {
//     return <h2>Hello React. {this.state.answer}</h2>;
//   }
// }

ReactDom.render(<App></App>, document.getElementById('root'));