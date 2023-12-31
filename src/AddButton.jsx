// import { IoAdd } from "react-icons/io5";

"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
// import books from "./books.js";

export default function AddButoon() {
  const [openModal, setOpenModal] = useState(false);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookYear, setBookYear] = useState("");
  const [bookIsCompleted, setBookIsCompleted] = useState();
  // const [arrayBook, setArrayBook] = useState(books);

  function onCloseModal() {
    setOpenModal(false);
    setBookTitle("");
    setBookAuthor("");
    setBookYear("");
  }

  // const generateNewBook = (bookTitle, bookAuthor, bookYear, bookIsCompleted) => {
  //   return ({
  //     title: bookTitle,
  //     author: bookAuthor,
  //     year: bookYear,
  //     isCompleted: bookIsCompleted,
  //   });
  // };

  function addBook(e) {
    e.preventDefault();

    const newBook = {bookTitle, bookAuthor, bookYear}
    console.log(newBook);
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add Book</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add new book
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book title" />
              </div>
              <TextInput
                id="bookTitle"
                placeholder="Type book title . . ."
                value={bookTitle}
                onChange={(event) => setBookTitle(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bookAuthor" value="Book author" />
              </div>
              <TextInput
                id="bookAuthor"
                placeholder="Type book author . . ."
                value={bookAuthor}
                onChange={(event) => setBookAuthor(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bookYear" value="Book year" />
              </div>
              <TextInput
                id="bookYear"
                type="number"
                placeholder="Type book year . . ."
                required
                value={bookYear}
                onChange={(event) => setBookYear(event.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="isCompleted"
                  value={bookIsCompleted}
                  onSelect={(event) => setBookIsCompleted(event.target.value)}
                />
                <Label htmlFor="isCompleted">Sudah dibaca</Label>
              </div>
            </div>
            <div className="w-full">
              <Button
                type="submit"
                onClick = {addBook}
              >
                Add
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
