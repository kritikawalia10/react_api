import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", {headers: { Authorization: "whatever-you-want" }});
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };
    fetchData();
  },[]);

  return (
    <>
       {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <div style={{display: "flex", alignItems: "center"}}>
            <div style={{marginRight: "20px"}}>
              <img src={book.imageLinks.thumbnail} alt="book_img" width={150} />
            </div>
            <div className="container">
              <p>{book.description}</p>
            </div>
          </div>
          <p>{book.authors.join(", ")}</p>
          <hr/>
        </div>
      ))}
    </>
  )
}

export default App
