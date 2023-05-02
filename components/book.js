import React, { useState } from 'react';
import {
    Container,
    Main,
    Title,
    Description,
    CodeTag,
    BookTitle
  
  } from '../components/sharedstyles'
const Book = ({ book }) => {
  return (
    <div className="properties">
        <p>Author: {book.author}</p>
        <p>Country: {book.country}</p>
        <p>Image: <img src={book.imageLink} alt={book.title} /></p>
        <p>Language: {book.language}</p>
        <p>
        Link:{' '}
        <a href={book.link} target="_blank" rel="noopener noreferrer">
            Wikipedia
        </a>
        </p>
        <p>Pages: {book.pages}</p>
        <p>Year: {book.year}</p>
    </div>
  );
};

export default Book;
