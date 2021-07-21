require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.SERVER_PORT
const app = express();

// Servers static assets
app.use(express.static(path.join(__dirname + '/Railway-Track-Monitoring-master')));
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => console.log('ok.'));