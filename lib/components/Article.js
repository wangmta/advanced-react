import React from 'react';
import './style.scss';

const Article = props => {
  const { article, author } = props;
  return (
    <div className="ArticleCard">
      <div>{article.title}</div>
      <div>{article.id}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

export default Article;
