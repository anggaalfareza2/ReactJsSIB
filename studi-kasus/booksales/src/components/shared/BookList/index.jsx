import { useState } from "react";
import { booksData, dummyBooks } from "../../../Utils/booksData";
import "../../../../src/app.css";

export default function BookList() {
  const [books, setBooks] = useState(booksData);

  // 🔥 index untuk tracking buku yang akan ditambahkan
  const [index, setIndex] = useState(0);

  const handleAddBook = () => {
    // jika buku telah ditambahkan semua 
    if (index >= dummyBooks.length) return;

    // menambahkan 1 buku
    const newBook = dummyBooks[index];

    // tambah ke state
    setBooks([...books, newBook]);

    setIndex(index + 1);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Koleksi Buku Terbaru</h2>

      {/* BUTTON */}
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={handleAddBook}>
          See More
        </button>
      </div>

      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img src={book.image} className="card-img-top book-image" alt={book.title} />
              <div className="card-body">
                <h5>{book.title}</h5>
                <p><strong>{book.author}</strong></p>
                <p>{book.year}</p>
                <p>{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}