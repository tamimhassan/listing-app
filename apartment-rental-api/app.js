import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';

dotenv.config();
const app = express();

// Database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Database Connected.'));

mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// Bring in routes
import apartmentRoutes from './src/routers/apartment.router';
import authRoutes from './src/routers/auth.router';
import userRoutes from './src/routers/user.router';

// apiDocs
app.get('/', (req, res) => {
  fs.readFile('./docs/apiDocs.json', (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    const docs = JSON.parse(data);
    res.json(docs);
  });
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use('/', apartmentRoutes);
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'Unauthorized!' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running port ${port}`);
});
