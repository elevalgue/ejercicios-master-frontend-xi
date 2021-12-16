console.log("************** DELIVERABLE 04 *********************");

console.log('/*------ 1. Read Books ------*/')

// interface Book {
//   title: string;
//   isRead: boolean; 
// }

// const books: Array<Book> = [
//   { title: "Harry Potter y la piedra filosofal", isRead: true },
//   { title: "Canción de hielo y fuego", isRead: false },
//   { title: "Devastación", isRead: true },
// ];

// function isBookRead( books: Array<Book>, titleToSearch: string): boolean {
//   const book = books.find(book => book.title === titleToSearch);
//     return book ? book.isRead : false;
// }

// console.log(isBookRead(books, "Devastación")); // true
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false
// console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log("/*---------------------*/");


interface IBook {
    title: string;
    isRead: boolean;
}

const books: Array<IBook> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books: Array<IBook>, titleToSearch: string) {
    const book = books.find(book => book.title === titleToSearch);
    return book ? book.isRead : false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false