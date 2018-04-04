import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        bookshelfBooks: PropTypes.array.isRequired,
    }
    render() {
        const { bookshelfTitle, bookshelfBooks } = this.props

        var bookMaking = bookshelfBooks.map(function (item) {
            return (
                <li key={item.id}>
                    <Book 
                        image={item.imageLinks.smallThumbnail}
                        authors={item.authors}
                        title={item.title}
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