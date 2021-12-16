console.log("%c************** DELIVERABLE 04 *********************", 'color: green');

interface Book {
  title: string;
  isRead: boolean; 
}

const books: Array<Book> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead( books: Array<Book>, titleToSearch: string): boolean {
  const book = books.find(book => book.title === titleToSearch);
    return book ? book.isRead : false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
