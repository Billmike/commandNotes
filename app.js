const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const { argv } = yargs;

let command = argv._[0];

switch (command) {
  case 'add':
    console.log('Adding new notes');
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    }
    break;
  case 'list':
    console.log('Listing all notes');
    notes.getAll();
    break;
  case 'read':
    console.log('Reading notes....');
    notes.getNote(argv.title);
    break;
  case 'remove':
    console.log('Removing notes...');
    notes.removeNote();
    break;
  default:
    console.log('Command not recognized');
    break;
}
