import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookListContents extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }
    state = {
        bookshelfTitle: ['Currently Reading', 'Want to Read', 'Read'],
    }

    //Change normal title to the title in data
    shelfIdentifier = (title) => {
        switch(title) {
            case 'Currently Reading':
                return 'currentlyReading'
            case 'Want to Read':
                return 'wantToRead'
            case 'Read':
                return 'read'
            default:
                console.log('No current reading state for a book')
                return ''
        }
    }
    
    render() {
        const { bookshelfTitle } = this.state
        const { books, onUpdateBook } = this.props

        return (
            <div className="list-books-content">
                <div>
                    {bookshelfTitle.map((nthTitle) => (
                        <BookShelf
                            key={nthTitle}
                            bookshelfTitle={nthTitle}
                            bookshelfId={this.shelfIdentifier(nthTitle)}
                            bookshelfBooks={books.filter((item) => {
                                return item.shelf === this.shelfIdentifier(nthTitle)
                            })}
                            onUpdateBook={onUpdateBook}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default BookListContents