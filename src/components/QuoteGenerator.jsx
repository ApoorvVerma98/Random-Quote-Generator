import React, { useState } from 'react';
import Quote from './Quote';
import Button from './Button';
import './QuoteGenerator.css';

const quotes = [
  {
    text: "Do not be attached to the fruits of your actions, nor be desirous of not doing your duty. Free from attachment, perform your duty with a balanced mind.",
    author: "Krishna"
    },
    {
      text: "As rivers flow towards the ocean, all actions should flow towards the Supreme.",
      author : "Arjun"
    },
    {
    text: "The greatest virtue is to control the senses. The greatest wealth is contentment. The greatest happiness is to be free from attachments.",
    author: "Buddha"
    },
    {
    text: "The world is like a dream. It is transient and unreal. Do not be attached to it.",
    author: "Ganga putra Bhism"
    },
    {
    text: "The path of righteousness is like a straight path. The path of unrighteousness is like a crooked path.",
    author: "Rama"
    },
    {
    text: "The wise man is always content. He is not disturbed by joy or sorrow. He is always at peace.",
    author: "Laxman"
    },
    {
    text: "The greatest gift is the gift of knowledge. The greatest wealth is the wealth of good deeds. The greatest happiness is the happiness of helping others.",
    author: "Sita"
    },
    {
    text: "The world is a beautiful place. It is full of joy and love. Be grateful for all that you have.",
    author: "Radha"
    },
    {
    text: "The soul is eternal. It is not born and it does not die. It is always free.",
    author: "Vyasa"
    },
    {
    text: "The universe is a manifestation of the Supreme. It is full of beauty and order. Be in awe of its greatness.",
    author: "Valmiki"
    }
];

function QuoteGenerator() {
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(0);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuoteIndex(randomIndex);
  };

  const { text, author } = quotes[selectedQuoteIndex];

  return (
    <div className="QuoteGenerator">
      <Quote text={text} author={author} />
      <Button onClick={generateRandomQuote} />
    </div>
  );
}

export default QuoteGenerator;
