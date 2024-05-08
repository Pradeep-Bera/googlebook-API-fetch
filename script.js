let search = document.getElementById("search");
search.addEventListener('click', fetchData);

let allBooks = document.getElementById("allBooks");
let content = '';

function fetchData() {
    //step 1- read user input
    let bookInput = document.getElementById('bookInput').value;
    // console.log(bookInput);
    //step 2 - create the request

    let myRequest = new XMLHttpRequest();

    myRequest.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${bookInput}`);



    myRequest.send();

    myRequest.onreadystatechange = () => {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            let convertedBooks = JSON.parse(myRequest.response);
            // console.log(convertedBooks.items[0].volumeInfo.title);
            let newBook = convertedBooks.items.map((book) =>
                `<div class="book">
            <img src=${book.volumeInfo.imageLinks.thumbnail}/>
            <h1>${book.volumeInfo.title}</h1>
            <p>${book.volumeInfo.description}</p>
            </div>`
            ).join("");
            content += newBook;
            // console.log(content);
            allBooks.innerHTML = content;


        }
    };

}
