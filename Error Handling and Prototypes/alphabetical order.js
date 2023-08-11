function BooksInOrder(books, callback) {
    const titles = books.map(book => book.title);
    titles.sort();
    callback(titles);
  }
  
  const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "Games", author: "Suzanne Collins", year: 2008 },
    { title: "Da Vinci Code", author: "Dan Brown", year: 2003 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  ];
  
  BooksInOrder(books, function(titles) {
    console.log(titles);
  });