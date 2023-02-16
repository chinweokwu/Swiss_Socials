import express from 'express';
const app = express();
import authRoutes from './routes/authRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import postRoutes from './routes/postRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import storyRoutes from './routes/storyRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'; 

// MIDDLEWARE
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(cookieParser());
 
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/users', userRoutes);


app.listen(8800, () => {
  console.log('Server is running on port 8800');
})