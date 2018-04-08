import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookListContent from './BookListContent'
import BookSearch from './BookSearch'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState((currentState) => ({
        books: books
      }))
    })
  }

  onSearchBook = (query) => {
    BooksAPI.search(query)
    .then((books) => {
      if (!Array.isArray(books)) {
        this.setState((currentState) => ({
          searchedBooks: []
        }))
      } else {
        this.setState((currentState) => ({
          searchedBooks: books
        }))
      }
    })
  }

  onUpdateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.componentDidMount()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <BookSearch
            onSearchBook={(query) => {
              this.onSearchBook(query)
            }}
            searchedBooks={this.state.searchedBooks}
            onUpdateBook={this.onUpdateBook}
          />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookListContent
              books={this.state.books}
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
