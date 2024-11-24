# Notes App

A simple command-line notes application built with Node.js. This app allows users to add, remove, list, and read notes, all managed through a JSON file.

---

## Features
- **Add Notes**: Create a new note with a title and body.
- **Remove Notes**: Delete an existing note by title.
- **List Notes**: View all stored note titles.
- **Read Notes**: Display the title and body of a specific note.

---

## Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd notes-app

## How to use it
1. For adding new note you can run:  node app.js add --title="My Note" --body="My Note Body"
2. For removing an existing note you can run: node app.js remove --title="My Note"
3. For listing all the notes you can run: node app.js list
4. For reading specific note you can run: node app.js read --title="My Note"