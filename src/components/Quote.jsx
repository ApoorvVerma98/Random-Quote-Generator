import React from 'react';
import './Quote.css';

function Quote({ text, author }) {
  return (
    <div className="Quote">
      <p className="QuoteText">{text}</p>
      <p className="QuoteAuthor">- {author}</p>
    </div>
  );
}

export default Quote;
