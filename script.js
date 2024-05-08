let search = document.getElementById("search");
search.addEventListener('click', fetchData);

function fetchData() {
    let bookInput = document.getElementById('bookInput').value;
    console.log(bookInput);
}