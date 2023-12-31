import express, { RequestHandler } from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo';

// Initializations
const app: express.Application = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middelwares
app.use(cors());
app.use(express.json() as RequestHandler);


// Routes
app.use('/api', todoRoutes);
export default app;