import BookItem from "./BookItem";

function BookList({ books, setBooks }) {
  return (
    <div>
      {books.map(book => (
        <BookItem key={book.id} book={book} setBooks={setBooks} />
      ))}
    </div>
  );
}

export default BookList;
