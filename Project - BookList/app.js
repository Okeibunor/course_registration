//defining the book object 
class Book {
  constructor(bookTitle, author, isbn) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.isbn = isbn;
  }
}
//defining the ui object
class ui {
  constructor() {}
  
  addBook(book) {
  
  const  new_row = document.createElement("tr");
  new_row.innerHTML = `
  <td> ${book.bookTitle}</td>
  <td> ${book.author}</td>
  <td> ${book.isbn}</td>
  <td><button type="button" class="close" aria-label="Close"> <span aria-hidden="true" style="color: red;">&times;</span></button></td>`;
    
  document.querySelector("#table-body").appendChild(new_row);
  }
}
//event listener for submit button
document.querySelector("#submit").addEventListener("click",function(e){
  const bookTitle = document.querySelector("#book-title").value;
        author = document.querySelector("#author").value;
        isbn = document.querySelector("#isbn").value;

  newBook = new Book(bookTitle,author,isbn);

  newUI = new ui();

  newUI.addBook(newBook);
  e.preventDefault();
});
//event listener for close button
document.querySelector(".table").addEventListener("click",function(e){
  if(e.target.className === "close-button"){ 
    e.target.parentElement.parentElement.parentElement.remove();
  }
  e.preventDefault();
});