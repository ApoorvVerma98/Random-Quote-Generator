import React from 'react';
import './Button.css';

function Button({ onClick }) {
  return <button className="Button" onClick={onClick}>Generate Quote</button>;
}

export default Button;
