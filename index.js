const notConsole = document.querySelector("#notConsole");
const sensor = document.querySelector("#sensor");
const addBook = document.querySelector('#add-book');
const addBookForm = document.querySelector('#add-book-form');
const addButton = document.querySelector('#add');
const shelf1 = document.querySelector('#shelf-1');
const bookSearch = document.querySelector('#book-search');
const search = document.getElementById('search');
const addBookButton = document.getElementById('addBookButton');
const saveInfoButton = document.getElementById('saveInfoButton');
const deleteBookButton = document.getElementById('deleteBookButton');
const radioYes = document.getElementById('yes');
const radioNo = document.getElementById('no');





const booksStorage = [];
class book {
    constructor(title, author, bookmark, readStatus) {
        this.title = title;
        this.author = author;
        this.bookmark = bookmark;
        this.readStatus = readStatus;
    }
};

let bgVolumeControl;
let musicPause;
let musicPlay;

function bgMusicPlay () {
    musicPause = document.getElementById('pauseButton');
    musicPause.addEventListener('mousedown', ()=> {
        bgMusic.pause();
    })
    musicPlay = document.getElementById('playButton');
    musicPlay.addEventListener('mousedown', ()=> {
        bgMusic.play();
    })
    bgVolumeControl = document.getElementById('bgVolumeControl');
    var bgMusic = new Audio ('./sounds/feather.mp3');
    bgMusic.play();
    bgMusic.volume = bgVolumeControl.value/100;
    bgVolumeControl.oninput = function() {
        bgMusic.volume = this.value/100;
    }
    bgMusic.loop = true;
    
}

bgMusicPlay();





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
    addBookForm.reset()
    var beep = new Audio('./sounds/beep.mp3');
    var screenSound = new Audio('./sounds/screen.mp3')
    screenSound.volume = 0.2;
    beep.volume = 0.2;
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
        addBookForm.classList.add('add-book-form-closed');
        addBookForm.classList.remove('add-book-form-open');
        addBook.classList.add("add-book-closed");
        addBook.classList.remove("add-book-open");
        addButton.classList.add('add-button-closed');
        addButton.classList.remove('add-button-open');
        addButton.innerHTML = "Add to </br> collection";
        bookSearch.classList.add("book-search-open");
        bookSearch.classList.remove("book-search-closed");
        beep.play();
        screenSound.play();
        search.classList.add("search-input-closed");
        search.classList.remove("search-input-open");
        addBookButton.style = "display: unset; pointer-events: unset; "
        saveInfoButton.style = "display: none; pointer-events: none; "
        deleteBookButton.style = "display: none; pointer-events: none; "


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
        addBookForm.reset()
        saveInfoButton.style = "display: none; pointer-events: none;"
        deleteBookButton.style = "display: none; pointer-events: none;"
        addBookButton.style = "display: unset; pointer-events: unset;"
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
        var bookSlideIn = new Audio('./sounds/bookSlideIn.mp3');

    if (booksStorage.length>=60) {
        alert("It's full mate");
    }
        
    else if (document.activeElement.id === 'addBookButton') {
        console.log("I clicked ADD button")
        const newBook = new book(title, author, bookmark, readStatus);
        booksStorage.push(newBook);
        let index = booksStorage.indexOf(newBook);
        const newBookSlot = document.getElementById(index);
        newBookSlot.innerHTML = `<div class="book"><p>${newBook.title}</p></div>`;
        bookSlideIn.play();
        addBookForm.reset()
    }

    else if (document.activeElement.id === 'saveInfoButton') {
        console.log("I clicked SAVE button")
        const newBook = new book(title, author, bookmark, readStatus);
        booksStorage.splice(selectedBookId, 1, newBook)
        let currentBookSlot = document.getElementById(selectedBookId);
        currentBookSlot.innerHTML = `<div class="book"><p>${newBook.title}</p></div>`;
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
        screenSound.volume = 0.2;
        beep.volume = 0.2;
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

let selectedBookId;

document.addEventListener('mousedown', (e) => {
        if(e.target && e.target.classList.contains('book')){
            selectedBookId = e.target.parentElement.id
            if(notConsole.classList.contains("console-open") === false) {
                console.log(`this is selected book ID ${selectedBookId}`)
                consoleRun()
                AddToCollection()
                saveInfoButton.style = "display: unset; pointer-events: unset;"
                deleteBookButton.style = "display: unset; pointer-events: unset;"
                addBookButton.style = "display: none; pointer-events: none;"
                title.value = booksStorage[selectedBookId].title
                author.value = booksStorage[selectedBookId].author
                bookmark.value = booksStorage[selectedBookId].bookmark
                if (booksStorage[selectedBookId].readStatus = "read") {
                    radioYes.checked = true;
                }
                else radioNo.checked = true;
            
            }
            else {
                saveInfoButton.style = "display: unset; pointer-events: unset;"
                deleteBookButton.style = "display: unset; pointer-events: unset;"
                addBookButton.style = "display: none; pointer-events: none;"
                title.value = booksStorage[selectedBookId].title
                author.value = booksStorage[selectedBookId].author
                bookmark.value = booksStorage[selectedBookId].bookmark
                if (booksStorage[selectedBookId].readStatus = "read") {
                    radioYes.checked = true;
                }
                else radioNo.checked = true;
            }
               
         }
})

let x;
let z;
function deleteBook () {
    booksStorage.splice(selectedBookId,1);
    addBookForm.reset()
    x = selectedBookId
    console.log(`this is X${x}, this is z${z}`)
    for (x; x<=60; x++) {
        z = parseInt(x)+1;
        currentBookSlot = document.getElementById(x);
        nextBookSlot = document.getElementById(z);
        if (nextBookSlot.childNodes.length) {
            currentBookSlot.innerHTML = nextBookSlot.innerHTML;
        }
        else if (currentBookSlot.childNodes.length) {
            currentBookSlot.innerHTML = "";
        }
        else break;
    }
}