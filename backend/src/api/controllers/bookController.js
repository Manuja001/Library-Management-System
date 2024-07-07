import bookModel from "../models/bookModel";

// Fetch all books from the database
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    if (!books.length) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a single book from the database
export const getBookById = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "No book found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new book

export const createBook = async (req, res) => {
  const book = req.body;
  const newBook = new bookModel(book);
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a book

export const updateBook = async (req, res) => {
  try {
    await bookModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book

export const deleteBook = async (req, res) => {
  try {
    await bookModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
