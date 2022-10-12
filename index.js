const notConsole = document.querySelector("#notConsole");
const sensor = document.querySelector("#sensor");
const addBook = document.querySelector('#add-book');
const addBookForm = document.querySelector('#add-book-form');
const addButton = document.querySelector('#add');
const shelf1 = document.querySelector('#shelf-1');
const bookSearch = document.querySelector('#book-search');
const search = document.getElementById('search');
// const books = document.querySelectorAll('.book');


const booksStorage = [];
class book {
    constructor(title, author, bookmark, readStatus) {
        this.title = title;
        this.author = author;
        this.bookmark = bookmark;
        this.readStatus = readStatus;
    }
};



function fillOut () {
    const demoTitles = ['Gardens of the Moon', 'Deadhouse Gates', 'Memories of Ice', 'House of Chains', 'Midnight Tides', 'The Bonehunters', "Reaper's Gale", 'Toll the Hounds', 'Dust of Dreams', 'The Crippled God', 'Night of Knives', 'Return of the Crimson Guard', 'Stonewielder', 'Orb Sceptre Throne', 'Blood and Bone', 'Assail', 'The God is Not Willing', 'No Life Forsaken'];
    let i;
    for (i=0; i<=17; i++) {
        const newBook = new book(demoTitles[i], 'Steven Erikson', '1000', 'Read');
        booksStorage.push(newBook);
        let index = booksStorage.indexOf(newBook);
        const newBookSlot = document.getElementById(index);
        newBookSlot.innerHTML = `<div class="book"><p>${newBook.title}</p></div>`;
    }
}


function consoleRun() {
    var beep = new Audio('./sounds/beep.mp3');
    var screenSound = new Audio('./sounds/screen.mp3')
    beep.pause();
    beep.currentTime = 0;
    screenSound.pause();
    screenSound.currentTime = 0;
    if (notConsole.classList.contains("console-open")) {
        notConsole.classList.remove('console-open')
        beep.play();
        screenSound.play();
    }
    else {
        notConsole.classList.add("console-open"); 
        beep.play();
        screenSound.play();
        search.classList.add("search-input-closed");
        search.classList.remove("search-input-open");
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
    if (booksStorage.length>=60) {
        alert("It's full mate");
    }

    else {
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let bookmark = document.querySelector('#bookmark').value;
        let readStatus = document.querySelector('input[name="status"]:checked').value;
        const newBook = new book(title, author, bookmark, readStatus);
        booksStorage.push(newBook);
        let index = booksStorage.indexOf(newBook);
        const newBookSlot = document.getElementById(index);
        newBookSlot.innerHTML = `<div class="book"><p>${newBook.title}</p></div>`;
        var bookSlideIn = new Audio('./sounds/bookSlideIn.mp3');
        bookSlideIn.play();
        addBookForm.reset()
    }
})



function showSearch() {
    var beep = new Audio('./sounds/beep.mp3');
    var screenSound = new Audio('./sounds/screen.mp3')
    search.classList.remove("search-input-closed");
    search.classList.add("search-input-open");
    search.select();
    notConsole.classList.remove('console-open')
        beep.play();
        screenSound.play();
}




let index;
let previousId;


function highlightSearch() {
    index = parseInt(booksStorage.findIndex(function(newBook){
        return newBook.title.toLowerCase() === search.value.toLowerCase();
    }));
    let bookSlot;
    console.log(`this is index: ${index}`);
    if (index === -1 && typeof(previousId) === 'number') {
        bookSlot = document.getElementById(previousId);
        bookSlot.style = "color: var(--font-color); text-shadow: none;";
        console.log(`Lazar Was here`)
    }
    else if (index !== -1 && typeof(previousId) === 'number') {
        bookSlot = document.getElementById(previousId);
        bookSlot.style = "color: var(--font-color); text-shadow: none;";
        bookSlot = document.getElementById(index);
        bookSlot.style = "color: red; text-shadow: 0 0 2px 2px brightred;";
        previousId = index;
        console.log(`this is PId in 2nd else if: ${previousId}`);
        return previousId;
    }
    else if (index!== -1) {
        bookSlot = document.getElementById(index);
        bookSlot.style = "color: red; text-shadow: 0 0 2px 2px brightred;";
        console.log(`This is Index in else if#3 ${index}`);
        previousId = index;
        console.log(`This is PID in 3rd else if: ${previousId}`);
        return previousId;
    }
}


document.addEventListener('mousedown', (e) => {
        if(e.target && e.target.classList.contains('book')){
                alert(`${booksStorage[e.target.parentElement.id].title}\n${booksStorage[e.target.parentElement.id].author}\n${booksStorage[e.target.parentElement.id].bookmark}\n${booksStorage[e.target.parentElement.id].readStatus}`)
         }
})

