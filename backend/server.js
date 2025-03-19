import config from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {logger} from './src/middleware/loggers/logger.js';
import corsOptions from './src/common/corsOptions.js';
import errorHandler from './src/middleware/loggers/errorHandler.js';
import testRoute from './src/features/test/test.route.js'

const PORT = process.env.PORT || 3500;

/** Initialize Express App */
const app = express();
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

/** Routes */
app.use('/api/v1/test', testRoute);

/** Error Handler */
//app.use(errorHandler);

// Default to 404 Page
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('json')) {
      res.json({ message: 'Invalid API Endpoint' });
    } else {
      res.type('txt').send('Invalid API Endpoint');
    }
  });

  //Start app
  app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));