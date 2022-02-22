const path = require('path');
const express = require('express');

const PORT = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log(`Server is listening ${PORT} port...`));