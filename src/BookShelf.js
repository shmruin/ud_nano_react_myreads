import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        bookshelfBooks: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }

    render() {
        const { bookshelfTitle, bookshelfBooks, onUpdateBook } = this.props

        var bookMaking = bookshelfBooks.map(function (item) {
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
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ bookshelfTitle }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookMaking}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf