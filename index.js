// ESD FA2 Group 23

const express = require('express')
const students = require('./students')

const app = express()

// Middleware in node js
app.use(express.json())

app.listen(3000 , () => {
    console.log('Listening On Port 3000');
})


app.get('/', (req, res) => {
    res.json({message : "API is Working" })
})

// Get Method
app.get('/api/students', (req, res) => {
    res.json(students)
})

// Post Method
app.post('/api/students', (req, res) => {

    if(!req.body.email){
        res.status(400)
        return res.json({ error: "email is required..." })
    }

    const user = {
        id: students.length + 1,
        name : req.body.name,
        email : req.body.email,
        college : req.body.college
    }

    students.push(user)
    res.json(user)
})

// Put Method
app.put('/api/students/:id', (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let email = req.body.email
    let college = req.body.college

    let index = students.findIndex((students) => {
        return (students.id == Number.parseInt(id))
    })
    console.log(id, req.body , index)

    if (index >= 0) {
        let std = students[index]
        std.name = name
        std.email = email
        std.college = college
        res.json(std)
    } else {
        res.status(404)
        res.end()
    }

})

// Delete Method
app.delete("/api/students/:id", (req , res)=> {
    let id = req.params.id;
    let index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })

    if (index >= 0) {
        let std = students[index]
        students.splice( index , 1)
        res.json(std)
    } else {
        res.status(404)
    }
})
    

       