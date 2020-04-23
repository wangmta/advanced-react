import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const dateDisplay = date => {
  return new Date(date).toDateString();
};

// presentational component for display only
const Article = props => {
  const { article, author } = props;

  // this should be handled by provider, the following is not good for responsibility separation
  // const author = store.lookupAuthor(article.authorId);
  return (
    <div className="ArticleCard">
      <div>{article.title}</div>
      <div>ID: {article.id}</div>
      <div>{dateDisplay(article.date)}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

// const ArticleContainer = (props, { store }) => {
//   return <Article {...props} store={store} />;
// };

// ArticleContainer.contextTypes = {
//   store: PropTypes.object
// };

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}

// container component for connecting presentational component to store/context
export default storeProvider(extraProps)(Article);
