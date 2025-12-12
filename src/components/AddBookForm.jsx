import { useState } from "react";

function AddBookForm({ setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleAdd() {
    if (!title) return;

    setBooks(prev => [
      ...prev,
      { id: Date.now(), title, author, status: "Not Read" }
    ]);

    setTitle("");
    setAuthor("");
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      <input
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      <button
        onClick={handleAdd}
        style={{ padding: "10px 20px", background: "black", color: "white", border: "none" }}
      >
        Add Book
      </button>
    </div>
  );
}

export default AddBookForm;
