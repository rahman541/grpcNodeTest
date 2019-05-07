const client = require('./client')

let newNote = {
    title: 'New note',
    content: 'New note content'
}

client.insert(newNote, (err, note) => {
    if (!err) {
        console.log('New Note created Successfully: ', note)
    } else {
        console.error(err)
    }
})