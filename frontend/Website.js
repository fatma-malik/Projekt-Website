"use strict";

let books = [];

// ladet das "JSON" File
function loadFileJSON() {

  fetch('http://localhost:8080/books', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((json) => saveBooks(json))

}

// speichert die Bücher
function saveBooks(json) {
  books = json;
}

// löscht Bücher beim Aufruf
function clearBooks() {
  document.getElementById("books").innerHTML = "";
  document.getElementById("bookDetails").innerHTML = "";
}

// Zeigt bücher des bestimmten Genres
function showBooks(genre) {

  clearBooks();

  for (let i = 0; i < books.length; i++) {
    
    if (books[i].genre == genre) {
      showBook(books[i]);
    }

  }
}

// Zeigt Bücher und erstellt das Format
function showBook(book) {

  let bookContainer = document.getElementById("books");

  let bookElement = document.createElement("div");
  bookContainer.appendChild(bookElement);
  bookElement.setAttribute('class', "book");

  const picture = book.picture;
  const name = book.name;

  let button = document.createElement("button");
  bookElement.appendChild(button);
  button.type = "button";
  button.addEventListener("click", function onclick() { bookDetails(book)});

  let img = document.createElement("img");
  button.appendChild(img);
  img.type = "img";
  img.setAttribute('src', picture);
  img.setAttribute('id', name);
  img.setAttribute('class', "coverArt")

}

// Zeigt Details wenn man auf das Buch clickt
function bookDetails(book) {

  clearBooks();

  let bookInformation = document.getElementById("bookDetails");

  let bookInfoElement = document.createElement("div");
  bookInformation.appendChild(bookInfoElement);
  bookInfoElement.setAttribute('class', "bookDetail");

  const detailsName = book.name;
  const detailsGenre = book.genre;
  const detailsStars = book.stars;
  const detailsPicture = book.picture;
  const detailsOpinion = book.opinion;

  let img = document.createElement("img");
  bookInfoElement.appendChild(img);
  img.type = "img";
  img.setAttribute('src', detailsPicture);
  img.setAttribute('id', detailsName);
  img.setAttribute('class', "coverArt")

  let p = document.createElement("p");
  bookInformation.appendChild(p);
  p.setAttribute('id', "textDetails");

  p.innerHTML = `<br/><br/><br/><br/><br/><br/> Name: ${detailsName} <br/> Genre: ${detailsGenre} <br/> Stars: ${detailsStars} <br/> Opinion: ${detailsOpinion}`; 

  console.log(p);

}