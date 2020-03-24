fs = require('fs')

const listNote = function() {
    return loadNotes()
}

const addNote = function (title, body) {
const notes = loadNotes()
notes.push({
    title: title,
    body: body
})
saveNotes(notes)
}

const saveNotes = function (notes) {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = function() {
       const dataBuffer = fs.readFileSync('notes.json')
       const dataJSON = dataBuffer.toString()
       return JSON.parse(dataJSON)
}

const removeNote = function(title) {
    const notes = loadNotes()
    const filtered = notes.filter(note=>note.title !== title)
    fs.writeFileSync('notes.json', JSON.stringify(filtered)) 
}

const readNote = function(title) {
    const notes = loadNotes() 
    const note = notes.find(note => note.title === title)
        return note ? console.log('Note found' + '\n' + '--' + '\n' + `Title: ${note.title}`+ '\n' + `Body: ${note.body}`) : console.log('Note is not found')
    }
    

module.exports = {
    listNote : listNote,
    addNote : addNote,
    removeNote : removeNote,
    readNote : readNote
}