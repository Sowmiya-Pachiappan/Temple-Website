import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import templeRoutes from './src/routes/templeRoutes.js';
import eventRoutes from './src/routes/eventRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import homePageRoutes from './src/routes/homePageRoutes.js';

import { sequelize } from './src/config/database.js';
import './src/models/index.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/temples', templeRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/user', userRoutes);
app.use('/api/homepage', homePageRoutes);
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log('Database connected.');
  app.listen(PORT, () =>
    console.log(
      `Server running at http://localhost:${PORT}`
    )
  );
});
