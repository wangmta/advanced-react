import React from 'react';
import Article from './Article';

// in react 15, function component will always re-render, react doesn't optimize function components
// in react 16 function component is optimized
// use PureComponent can avoid wasted rendering
// always use PureComponent whenever possible

// const ArticleList = props => {
//   return (
//     <div>
//       {Object.values(props.articles).map(article => {
//         return <Article key={article.id} article={article} />;
//       })}
//     </div>
//   );
// };

class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article => {
          return <Article key={article.id} article={article} />;
        })}
      </div>
    );
  }
}

{
  /* <Article key={article.id} article={article} store={props.store} /> */
}

export default ArticleList;
