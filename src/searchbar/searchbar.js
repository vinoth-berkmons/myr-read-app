import React from 'react';

import { Link } from 'react-router-dom';

const searchBar = (props) => {

    props.data = [];

  return (
    <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/" className="close-search" >Close</Link>
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
  )
}
export default searchBar;