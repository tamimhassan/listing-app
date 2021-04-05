import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const { json, urlencoded } = bodyParser;

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

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
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
