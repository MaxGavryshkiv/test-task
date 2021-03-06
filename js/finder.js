import fetchBook from "./fetchBook.js";

const bookSearchInput = document.querySelector(".book-search-input");
const bookSearchResult = document.querySelector(".book-search-result");
// let markup = `
//     <img src='${}' alt="">
//     < h3 ></h3 >
//     <p>Autors</p>`;
let timer;

bookSearchInput.addEventListener("input", searchBook);

function searchBook(e) {
  clearTimeout(timer);
  const inputValue = event.target.value.toLowerCase();
  if (e.target.value.length <= 3) {
    return;
  }
  timer = setTimeout(() => {
    fetchBook(inputValue)
      .then((answer) => renderBooks(answer.items))
      .catch((error) => renderError(error));
  }, 3000);
}

function renderBooks(books) {
  const bookArr = books
    .map((book) => {
      let src;

      try {
        src = `${book.volumeInfo.imageLinks.thumbnail}`;
      } catch {
        src = "./Pictures/not-found.png";
      }

      return `<li class='book-search-result-card'>
        <img class='book-search-result-img' src=${src} alt="${book.volumeInfo.title}">
        <h3>${book.volumeInfo.title}</h3>
        </li>`;
    })
    .join("");

  bookSearchResult.innerHTML = `<ul class='book-search-result-list'>${bookArr}</ul>`;
}

function renderError(error) {
  const message =
    "<h2 class='book-search-result-error'>Something went wrong!</h2>";
  bookSearchResult.innerHTML = message;
  console.log(error);
}
