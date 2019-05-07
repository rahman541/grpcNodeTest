// gRPC Server
const grpc = require('grpc')
const uuidv1 = require('uuid/v1')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('./notes.proto')
const notesProto = grpc.loadPackageDefinition(packageDefinition)
const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1' },
    { id: '2', title: 'Note 2', content: 'Content 2' }
]

const server = new grpc.Server()
server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, {notes})
    },
    insert: (call, callback) => {
        let note = call.request
        console.log(note)
        note.id = uuidv1()
        notes.push(note)
        callback(null, note)
    }
})

server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure())
console.log('Server running at http://localhost:50051')
server.start()