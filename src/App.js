import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI'

import { Route, Link } from 'react-router-dom';

import './App.css';

import BookShelf from './bookshelf/bookshelf';
import Book from './bookshelf/book/book';


function BooksApp() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [localBookList, setLocalBookList] =  useState([]);


  useEffect(() => {
    fetchAllBooks();
  }, [setData]);

  function fetchAllBooks(){
    BooksAPI.getAll().then((bookList) => {
      setData(bookList);
      setLocalBookList(bookList);
      setLoading(false);
    })
  }

  const changeBookStatus = (book, event) => {
    BooksAPI.update(book, event.target.value).then((updatedBooks) => {
      fetchAllBooks();
    })
  }

  const searchBooks = (books) => {
 
    setQuery(books);
    if (books.length > 3 && books !== "") {
      BooksAPI.search(query).then(booksList => {
        booksList === undefined || booksList.error === "empty query" || booksList.items <= 0 ? setData([]) : setData(setShelf(booksList));
      })
    }
    else{
      setData([]);
    }

  }

  function setShelf(books){
    books.forEach((searchBook,key) => localBookList.forEach(book => {
      if(searchBook.id === book.id){
        searchBook["shelf"] = book.shelf;
      }
    }))
    return books;
  }

  function resetSearchBox(){
    fetchAllBooks();
    setQuery("");
  }


  return (
    <div className="app">
      {
        loading ? <div>Loading...</div> : <div>
          <Route path="/search"  render={() => (
            <div>
              <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/" onClick={resetSearchBox} className="close-search" >Close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text"
                      value={query}
                      onChange={(event) => searchBooks(event.target.value)}
                      placeholder="Search by title or author and type minimum 4 characters" />
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
              </div>
              {
                query.length > 0 ? 
            data.length <= 0 ? <div className="bookshelf-books">No Book Found</div> :
                 <Book books={data} searchQuery={query} bookStatus={changeBookStatus}
                 /> : <div className="bookshelf-books">No Book Found</div> 
              }

            </div>
          )} />

          <Route exact path="/" render={() => (
            <BookShelf bookStatus={changeBookStatus}  bookList={data}  />
          )} />

        </div>
      }

    </div>
  )

}

export default BooksApp;
