const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET request
app.get('/api/users', (req, res) => {
  // Your code to fetch and return users data
  res.json({ message: 'GET request: Get all users' });
});

// POST request
app.post('/api/users', (req, res) => {
  // Your code to create a new user
  res.json({ message: 'POST request: Create a new user' });
});

// PUT request
app.put('/api/users/:id', (req, res) => {
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
  res.json({ message: `PUT request: Update user with ID ${req.params.id}` });
});

// DELETE request
app.delete('/api/users/:id', (req, res) => {
  // Your code to delete a user with the provided ID
  res.json({ message: `DELETE request: Delete user with ID ${req.params.id}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
