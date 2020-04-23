import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const dateDisplay = date => {
  return new Date(date).toDateString();
};

const Article = (props, context) => {
  const { article } = props;
  const author = context.store.lookupAuthor(article.authorId);
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

Article.contextTypes = {
  store: PropTypes.object
};

export default Article;
