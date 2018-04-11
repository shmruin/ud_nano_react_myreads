import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import BookListContent from './BookListContent'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({books: books})
    })
  }

  onSearchBook = (query) => {
    BooksAPI.search(query)
    .then((books) => {
      this.setState({
        searchedBooks: Array.isArray(books) ? books : []
      })
    })
  }

  onUpdateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((items) => {
      this.componentDidMount()
    })
  }

  render() {
    const { books, searchedBooks } = this.state

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <BookSearch
            onSearchBook={(query) => {
              this.onSearchBook(query)
            }}
            booksOnShelfs={books}
            searchedBooks={searchedBooks}
            onUpdateBook={this.onUpdateBook}
          />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookListContent
              books={books}
              onUpdateBook={this.onUpdateBook}
            />
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
