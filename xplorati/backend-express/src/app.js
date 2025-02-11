// filepath: /xplorati/my-express-backend/src/app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});