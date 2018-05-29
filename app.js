const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const { argv } = yargs;

const command = argv._[0];

switch (command) {
  case 'add': {
    console.log('Adding new notes');
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log('Note saved successfully');
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    }
    break;
  }
  case 'list':
    console.log('Listing all notes');
    notes.getAll();
    break;
  case 'read': {
    console.log('Reading notes....');
    const singleNote = notes.getNote(argv.title);
    if (singleNote.length > 0) {
      console.log(singleNote);
    } else {
      console.log('Note not found.');
    }
    break;
  }
  case 'remove': {
    console.log('Removing notes...');
    const removedNote = notes.removeNote(argv.title);
    const message = removedNote
      ? 'Note deleted successfully'
      : 'Note not found.';
    console.log(message);
    break;
  }
  default:
    console.log('Command not recognized');
    break;
}
