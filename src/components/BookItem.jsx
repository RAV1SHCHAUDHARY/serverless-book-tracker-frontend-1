function BookItem({ book, setBooks }) {
  function toggleStatus() {
    setBooks(prev =>
      prev.map(b =>
        b.id === book.id
          ? { ...b, status: b.status === "Read" ? "Not Read" : "Read" }
          : b
      )
    );
  }

  function deleteBook() {
    setBooks(prev => prev.filter(b => b.id !== book.id));
  }

  return (
    <div style={{
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <strong>{book.title}</strong>
        <p>{book.author}</p>
        <p>Status: {book.status}</p>
      </div>

      <div>
        <button onClick={toggleStatus} style={{ marginRight: "10px" }}>
          Toggle
        </button>

        <button onClick={deleteBook} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookItem;
