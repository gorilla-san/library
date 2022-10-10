const console = document.querySelector("#console");
const sensor = document.querySelector("#sensor");
const addBook = document.querySelector('#add-book');
const addBookForm = document.querySelector('#add-book-form');
const addButton = document.querySelector('#add');
const shelf1 = document.querySelector('#shelf-1');
const bookSearch = document.querySelector('#book-search')


const booksStorage = [];
class book {
    constructor(title, author, bookmark, readStatus) {
        this.title = title;
        this.author = author;
        this.bookmark = bookmark;
        this.readStatus = readStatus;
    }
};



function consoleRun() {
    var beep = new Audio('./sounds/beep.mp3');
    var screenSound = new Audio('./sounds/screen.mp3')
    beep.pause();
    beep.currentTime = 0;
    screenSound.pause();
    screenSound.currentTime = 0;
    if (console.classList.contains("console-open")) {
        console.classList.remove('console-open')
        beep.play();
        screenSound.play();
    }
    else {
        console.classList.add("console-open"); 
        beep.play();
        screenSound.play();
    }
   
}

function AddToCollection () {
    if (addBook.classList.contains("add-book-open")) {
        addBookForm.classList.add('add-book-form-closed');
        addBookForm.classList.remove('add-book-form-open');
        addBook.classList.add("add-book-closed");
        addBook.classList.remove("add-book-open");
        addButton.classList.add('add-button-closed');
        addButton.classList.remove('add-button-open');
        addButton.innerHTML = "Add to </br> collection";
        setTimeout(()=>{
            bookSearch.classList.add("book-search-open");
            bookSearch.classList.remove("book-search-closed");
        }, 1100)

    }
    else {
        addBook.classList.remove("add-book-closed");
        addBook.classList.add("add-book-open");
        addButton.classList.remove('add-button-closed');
        addButton.classList.add('add-button-open');
        setTimeout(() => {
        addButton.innerHTML = "Actually</br>&larr; no"
        }, 1100);
        setTimeout(function() {
            addBookForm.classList.remove('add-book-form-closed')
            addBookForm.classList.add('add-book-form-open')
        }, 1100);
        bookSearch.classList.remove("book-search-open");
        bookSearch.classList.add("book-search-closed");
    }
}

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let bookmark = document.querySelector('#bookmark').value;
    let readStatus = document.querySelector('input[name="status"]:checked').value;
    const newBook = new book(title, author, bookmark, readStatus);
    booksStorage.push(newBook);
    let index = booksStorage.indexOf(newBook)
    const newBookSlot = document.getElementById(index)
    newBookSlot.innerHTML = `<div class="book"><p>${newBook.title}</p></div>`;
})




