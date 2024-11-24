const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)

        console.log(chalk.green('New note added'))
    } else {
        console.log('Note title take!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    // Filter all the notes that are not the passed one
    const otherNotes = notes.filter((note) => note.title !== title)

    if(notes.length > otherNotes.length) {
        // Save the updated notes back to the file
        saveNotes(otherNotes)
        console.log(chalk.green('Note removed successfully!'))
    } else {
        console.log(chalk.red('No note found'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    const findNote = notes.find((note) => note.title === title)

    if(findNote) {
        console.log(chalk.blue.bold(findNote.title))
        console.log(findNote.body)
    } else {
        console.log(chalk.red('Note with the given title not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => 
{
    console.log(chalk.inverse('Your notes'))

    const notes = loadNotes()

    notes.forEach(note => {
        console.log(note.title)
    })
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}