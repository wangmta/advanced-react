import React from 'react';
import './style.scss';

const dateDisplay = date => {
  return new Date(date).toDateString();
};

const Article = props => {
  const { article, author } = props;
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

export default Article;
