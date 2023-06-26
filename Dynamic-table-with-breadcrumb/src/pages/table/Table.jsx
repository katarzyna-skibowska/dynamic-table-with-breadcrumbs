import { useEffect, useState } from "react";
import "./Table.css";

const Table = () => {
  const [books, setBooks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
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
      <h1 className="header-table">Books library</h1>
      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>AUTHOR</th>
            <th>TITLE</th>
            <th>PUBLISHER</th>
            <th>BOOK LANGUAGE</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        {books.map((book, index) => {
          return (
            <tbody
              onClick={() => {
                setShowDetails(!showDetails);
                setHighlightRow(book.id);
              }}
              key={index}
            >
              <tr
                onClick={() => setHighlightRow(book.id)}
                className={"highlighted-row ".concat(
                  highlightRow === book.id ? "selected" : ""
                )}
              >
                <td>{index + 1}</td>
                <td>{book.volumeInfo.authors} </td>
                <td>{book.volumeInfo.title}</td>
                <td>{book.volumeInfo.publisher}</td>
                <td>{book.volumeInfo.language}</td>
                <td>{book.volumeInfo.categories}</td>
              </tr>
              <>
                {showDetails === true && highlightRow === book.id ? (
                  <tr>
                    <td colSpan={6} className="details">
                      <h4> Book description: </h4>
                      {book.volumeInfo.description}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Table;
