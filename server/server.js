const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Server is running perfectly!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${5500}`);
});