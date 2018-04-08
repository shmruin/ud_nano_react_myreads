import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class BookSearch extends Component {
    static propTypes = {
        onSearchBook: PropTypes.func.isRequired,
        searchedBooks: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }

    render() {
        const { onSearchBook, searchedBooks, onUpdateBook } = this.props

        var bookMaking = searchedBooks.map(function (item) {
            return (
                <li key={item.id}>
                    <Book
                        book={item}
                        onUpdateBook={onUpdateBook}
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
                            onChange={(event) => onSearchBook(event.target.value)}
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
}

export default BookSearch