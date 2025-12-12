import { useState, useEffect } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  // TEMP DATA until AWS backend is connected
  useEffect(() => {
    setBooks([
      { id: 1, title: "Atomic Habits", author: "James Clear", status: "Read" },
      { id: 2, title: "The Alchemist", author: "Paulo Coelho", status: "Not Read" }
    ]);
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>📚 Book Tracker</h1>
      <AddBookForm setBooks={setBooks} />
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
