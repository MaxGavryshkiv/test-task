async function fetchBook(searchQuery) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
  );
  const answer = await response.json();
  return answer;
}

export default fetchBook;
