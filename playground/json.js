const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('test.json', originalNoteString);

const noteString = fs.readFileSync('test.json');

const note = JSON.parse(noteString);

console.log(typeof note);
console.log('The note title is:', note.title);

console.log('.... deleting test.json file.');

//* Clean up hard drive after file creation is successful.
fs.unlink('test.json', (err) => {
  if (err) throw err;
  console.log('test.json deleted successfully');
});
