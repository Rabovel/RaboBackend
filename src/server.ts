import express from 'express';
import { PORT } from './config';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
