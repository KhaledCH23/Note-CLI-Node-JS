const notes = require('./noteManager')
const yargs = require('yargs')

command = process.argv[2]
title = process.argv[4]
body =process.argv[6]

switch(command){
    case 'list': 
    return console.log(`printing ${notes.listNote().length} note(s).`)
    case 'add': 
    return notes.addNote(title, body), 
    console.log('Note created' + '\n' + '--' + '\n' + `Title: ${title}`+ '\n' + `Body: ${body}`)

    case 'remove': 
     return notes.removeNote(title),
     console.log('Note removed')
     case 'read': 
     return notes.readNote(title)
    default:
        return (console.log('options:'+ '\n' + '   --help          Show help                                           [boolean]' + '\n'+ '   --title,-t      Title of note                                      [required]'+ '\n'+ '   --body,-b       Body of note                                       [required]'))
}

