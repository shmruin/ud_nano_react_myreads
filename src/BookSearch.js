import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book.js'


function BookSearch(props) {
    //Check if the book already exist; if not, 'none' is given.
    var checkShelfId = (item, books) => {
        let res = books.filter((book) => {
            return book.id === item.id
        })

        return res.length === 0 ? 'none' : res[0].shelf
    }

    var bookMaking = props.searchedBooks.map(function (item) {
        return (
            <li key={item.id}>
                <Book
                    shelfId={checkShelfId(item, props.booksOnShelfs)}
                    book={item}
                    onUpdateBook={props.onUpdateBook}
                />
            </li>
        )
    })

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        className="search-books"
                        type="text"
                        placeholder="Search by title or author"
                        onChange={(event) => props.onSearchBook(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {bookMaking}
                </ol>
            </div>
        </div>
    )
}

BookSearch.propTypes = {
    onSearchBook: PropTypes.func.isRequired,
    booksOnShelfs: PropTypes.array.isRequired,
    searchedBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
}

export default BookSearch