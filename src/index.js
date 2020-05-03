require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const routes = require('./mailerRoutes');

app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});