require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 3000;

app.use('/api',require ('./routes/index'));

app.listen(port,() => {
    console.log(`esta en http://localhost:${port}`);
});