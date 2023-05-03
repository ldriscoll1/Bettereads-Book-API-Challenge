import React, { useState } from 'react';
import {
  BookText

  } from '../components/sharedstyles'
const Book = ({ book }) => {
  return (
    <div className="properties">
        <BookText>Author: {book.author}</BookText>
        <BookText>Country: {book.country}</BookText>
        <BookText>Image: <img src={book.imageLink} alt={book.title} /></BookText>
        <BookText>Language: {book.language}</BookText>
        <BookText>
        Link:{' '}
        <a href={book.link} target="_blank" rel="noopener noreferrer">
            Wikipedia
        </a>
        </BookText>
        <BookText>Pages: {book.pages}</BookText>
        <BookText>Year: {book.year}</BookText>
    </div>
  );
};

export default Book;
