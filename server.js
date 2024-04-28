const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 8080;

// Enable CORS for all origins
app.use(cors());

// Route to handle adding a user
app.get('/addUser', (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).send('Username is required');
    }

    fs.appendFile('members.txt', username + '\n', (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return res.status(500).send('Error adding user');
        }

        console.log('User added:', username);
        res.status(200).send('User added: ' + username);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
