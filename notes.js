const fs = require('fs');

const fetchNotes = () => {
  try {
    // * Fetch the existing notes if any.
    const notesString = fs.readFileSync('note-data.json');

    // * Parse it using JSON.parse
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body
  };

  // * Loop through the notes array using a for...of loop and check if
  // * the title already exists in the note
  for (const singleNote of notes) {
    if (singleNote.title === note.title) {
      return console.log(
        `UniqueErrorOccurred: A note with the title: ${
          note.title
        } already exists.`
      );
    }
  }

  // * Create the note if the title does not exist.
  notes.push(note);
  saveNotes(notes);
  return note;
};

const getAll = () => {
  console.log('getting all notes....');
  return fetchNotes();
};

const getNote = (title) => {
  console.log('Getting one note with title: ', title);
  const notes = fetchNotes();
  const singleNote = notes.filter(note => note.title === title);

  return singleNote;
};

const removeNote = (title) => {
  const notes = fetchNotes();

  const deletedNote = notes.filter((note) => {
    return title !== note.title;
  });
  saveNotes(deletedNote);

  return notes.length !== deletedNote.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
