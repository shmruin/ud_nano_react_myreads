import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookListContents extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }
    state = {
        bookshelfTitle: ['Currently Reading', 'Want to Read', 'Read'],
    }

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
        const { books } = this.props

        return (
            <div className="list-books-content">
                <div>
                    <BookShelf 
                        bookshelfTitle={bookshelfTitle[0]}
                        bookshelfBooks={books.filter((item) => {
                            return item.shelf === this.shelfIdentifier(bookshelfTitle[0])
                        })}
                    />
                    <BookShelf 
                        bookshelfTitle={bookshelfTitle[1]}
                        bookshelfBooks={books.filter((item) => {
                            return item.shelf === this.shelfIdentifier(bookshelfTitle[1])
                        })}
                    />
                    <BookShelf 
                        bookshelfTitle={bookshelfTitle[2]}
                        bookshelfBooks={books.filter((item) => {
                            return item.shelf === this.shelfIdentifier(bookshelfTitle[2])
                        })}
                    />
                </div>
            </div>
        )
    }
}

export default BookListContents