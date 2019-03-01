import React from 'react';

import { Link } from 'react-router-dom';

import Book from './book/book';

function BookShelf(props) {

    const [bookList] = [props.bookList];

    let filterCurrentReading = bookList.filter(currReading => currReading.shelf === "currentlyReading");
    let filterWantToRead = bookList.filter(wantToRead => wantToRead.shelf === "wantToRead");
    let filterReadBooks = bookList.filter(readBooks => readBooks.shelf === "read");


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <Book books={filterCurrentReading} bookStatus={props.bookStatus} />
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want To Read</h2>
                    <Book books={filterWantToRead} bookStatus={props.bookStatus} />
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title"> Read </h2>
                    <Book books={filterReadBooks} bookStatus={props.bookStatus} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
            </div>
        </div>
    )
}

export default BookShelf;