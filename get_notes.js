const client = require('./client')

client.list({}, (err, notes) => {
    if (!err) {
        console.log('Successfully fetch List notes')
        console.log(notes)
    } else {
        console.log(err)
    }
})