/*
  Třída pro jednu knihu v knihovně.

  Vlastnosti:
  - author: autor knihy
  - title: název khiny
  - year: rok vydání
  - image: obrázek knihy
  - isRead: boolean (true/false) zda máme knihu přečtenou

  Metody:
  - read(): označí knihu jako přečtenou
*/
import Library from "./library";

export default class Book {

  constructor(author, title, year, image) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.image = image;
    this.isRead = false;
  }

  read() {
    this.isRead = true;
    console.log(`Super, přečetl jsi knihu ${this.title}.`);
  }

  renderHTML () {

    let renderBookList = document.getElementById("booklist").innerHTML(
    
    <div class="book">
    <div class="book__image">
      <img src="images/book.jpg" alt="Obálka Název knihy"></img>
    </div>
      <div class="book__info">
      <h3 class="book__title">${this.title}</h3>
      <p class="book__meta">${this.author}, ${this.year}</p>
      </div>
    </div>);

    // je-li kniha přečtená, vygeneruj sem i toto
    if (Book.isRead === true) {

      renderBookList.innerHTML (
      <div class="book__badge book__badge--read">Přečteno</div>)

    };

    // jedná-li se o aktuálně čtenou knihu, vygeneruj sem toto:
    if (Book = this.currentBook) {

      renderBookList.innerHTML(
      <div class="book__badge book__badge--current">Právě čtu</div>)
    }

  }

}