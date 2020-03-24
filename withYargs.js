const notes = require('./noteManager')
const yargs = require('yargs')


// LIST command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function (){
        console.log(`printing ${notes.listNote().length} note(s).`)
    }
})


// ADD command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            // alias: 't',
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        },
        body: {
            // alias: 'b',
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
        console.log('Note created' + '\n' + '--' + '\n' + `Title: ${argv.title}`+ '\n' + `Body: ${argv.body}`)
    }
})

//REMOVE command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            // alias: 't',
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }},
    handler: function(argv){
      notes.removeNote(argv.title)
      console.log('Note removed')
    }
})

//READ command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            // alias: 't',
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }},
    handler: function (argv){
        notes.readNote(argv.title)
    }
})

  yargs.command('$0', 'the default command', () => {}, (argv) => {
    console.log('options:'+ '\n' + '   --help          Show help                                           [boolean]' + '\n'+ '   --title,-t      Title of note                                      [required]'+ '\n'+ '   --body,-b       Body of note                                       [required]')
  })
  .argv

yargs.parse()
// console.log(yargs.argv)




