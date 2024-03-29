const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const options = {
  origin: 'http://localhost:3000',
  useSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(options));

//routes
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('database connection successfully'))
  .catch((err) => console.log('error connecting to mongodb', err));

//listen on port 8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}..`);
});
