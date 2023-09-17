import express  from 'express';
import { SECRET } from "../middleware/auth";
import { authenticateJwt } from "../middleware/auth";
import { User, Course, Admin } from "../db";
import jwt from 'jsonwebtoken';
const router = express.Router();
import mongoose from 'mongoose';

 
  
router.get("/me", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ username: req.headers.user});
  if (!user) {
    res.status(403).json({msg: "user doesnt exist"})
    return
  }
  res.json({
      username: user.username, role:"user"
  })
})

  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {

      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({published: true});
    res.json({ courses });
  });
  
  router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    console.log(req.params.courseId)
    const course = await Course.findById(req.params.courseId);
    if (course) {
      const courseId: mongoose.Types.ObjectId = course._id;
      const user = await User.findOne({ username: req.headers.user });
      if (user) {
        user.purchasedCourses.push(courseId);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
  router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.headers.user}).populate('purchasedCourses');
    if (user) {
      res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  });
  
  export default router;