require('dotenv').config();
const express = require('express');

const PORT = process.env.SERVER_PORT
const app = experss();

const server = app.listen(PORT, () => console.log('ok.'));