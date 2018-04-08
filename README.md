# ud_react_myreads

**1. main page**

![Alt text](screenshots/myread_1.PNG?raw=true "ud_react_myreads View")

**2. search page**

![Alt text](screenshots/myread_2.PNG?raw=true "ud_react_myreads View")


## Introduction

Udacity React nanodegree course Myreads project.

User can check the book in each shelfs, move the books to other shelfs (Currently reading, Want to read, Read).

In search page(accessing with '+' sign below), user can search the book with keyword and move the book to shelf if he want.

Starter code is provided with Udactiy.

Working on the structure of js files, all code inside them, and dealing with features of react


## Stucture

**Describing Mainly changed sources only**

* `App.js` - Main starting js file. Link to `BookSearch.js` or `BookListContent.js`
* `BookListContent.js` - The wrapper js file of bookshelfs. Containing 3 BookShelf component.
* `BookShelf.js` - The wrapper js file of Books.
* `Book.js` - the book component that shows all things in book grid. Providing thumbnail, title, authors, and shelf of the book.
* `BookSearch.js` - Book searching js file. one can search book by its title and author. Result is immediately shown on each typing.


## How to run
- `npm install` and then `npm start` in this root folder
- Web page will be appeared automatically


## Environment
- Tested in window 10, chrome
- Backend Server is provided with Udacity's `BooksAPI.js` file. No other works on it.