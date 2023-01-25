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
  document.getElementById("table").innerHTML = "";
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

  let table = document.getElementById("table");

  let td = document.createElement("td");
  table.appendChild(td);
  td.type = "table";

  const picture = book.picture;
  const name = book.name;

  let button = document.createElement("button");
  td.appendChild(button);
  button.type = "button";
  button.addEventListener("click", function onclick() { bookDetails(book)});

  let img = document.createElement("img");
  button.appendChild(img);
  img.type = "img";
  img.setAttribute('src', picture);
  img.setAttribute('id', name);
  img.setAttribute('class', "coverArt")

  if (books.length == 5) {
    let lineBreak = document.createElement("br");
    img.appendChild(lineBreak);
  }

}

// Zeigt Details wenn man auf das Buch clickt
function bookDetails(book) {

  clearBooks();

  let table = document.getElementById("bookDetails");

  let td = document.createElement("td");
  table.appendChild(td);
  td.type = "table"

  const detailsName = book.name;
  const detailsGenre = book.genre;
  const detailsStars = book.stars;
  const detailsPicture = book.picture;

  let img = document.createElement("img");
  td.appendChild(img);
  img.type = "img";
  img.setAttribute('src', detailsPicture);
  img.setAttribute('id', detailsName);
  img.setAttribute('class', "bookDetails");

  let p = document.createElement("p");
  table.appendChild(p);
  p.setAttribute('id', "textDetails")

  p.innerHTML = ` Name: ${detailsName}` + ` Genre: ${detailsGenre}` + ` Stars: ${detailsStars}`; 

  console.log(p);

}