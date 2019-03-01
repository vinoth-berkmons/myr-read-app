import React from 'react';

import DropDownButton from '../../buttons/dropdown/dropdown';

const Book = (props) => {

  const placeholderImg = '../../icons/placeholder.jpg';

  return (

    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((reading) => (
          <li key={reading.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{
                  width: 128, height: 193,
                  backgroundImage: `url(${reading.hasOwnProperty("imageLinks") ? reading.imageLinks.thumbnail : placeholderImg})`
                }}></div>
                <DropDownButton selectStatus={props.bookStatus} currentStatus={reading} />
              </div>
              <div className="book-title">{reading.title}</div>
              <div className="book-authors">{reading.hasOwnProperty("authors") ? reading.authors.map(authors => authors) : ""}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>

  )
}

export default Book;