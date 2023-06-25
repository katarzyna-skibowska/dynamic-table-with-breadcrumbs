import { useEffect, useState } from "react";
import "./Table.styles.css";

const Table = () => {
  const [books, setBooks] = useState([]);
  const [highlightRow, setHighlightRow] = useState(-1);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=frontend&key=AIzaSyAS4eXdujBLeYR_MFMiBI1eRHZyVjQynv8"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        setBooks(data.items);
      });
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Author</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Publisher</th>
            <th>Categories</th>
            <th>Book language</th>
          </tr>
        </thead>
        {books.map((book, index) => {
          return (
            <tbody key={index}>
              <tr
                onClick={() => setHighlightRow(book.id)}
                className={"highlighted-row ".concat(
                  highlightRow === book.id ? "selected" : ""
                )}
              >
                <td>{index + 1}</td>
                <td>{book.volumeInfo.authors} </td>
                <td>{book.volumeInfo.title}</td>
                <td>{book.volumeInfo.subtitle}</td>
                <td>{book.volumeInfo.publisher}</td>
                <td>{book.volumeInfo.language}</td>
                <td>{book.volumeInfo.categories}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Table;
