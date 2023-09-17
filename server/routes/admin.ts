import express  from 'express';
import mongoose from 'mongoose';
import { User, Course, Admin } from "../db";
import jwt from 'jsonwebtoken';
import { SECRET } from "../middleware/auth";
import { authenticateJwt } from "../middleware/auth";


const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
    const admin = await Admin.findOne({ username: req.headers.user});
    if (!admin) {
      res.status(403).json({msg: "Admin doesnt exist"})
      return
    }
    res.json({
        username: admin.username, role:"admin"
    })
});

router.post('/signup', async(req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    
      if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();

        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
      }
  });
  
  router.post('/login', async (req, res) => {
    const  username  = req.body.username;
    const password  =req.body.password;
    console.log(username)
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  router.post('/courses', authenticateJwt, async (req, res) => {
    const createdCourse = req.body;
    console.log(req.headers.user);
    if(createdCourse){
    const course = new Course(createdCourse);
    const courseId: mongoose.Types.ObjectId = course._id;
    const admin = await Admin.findOne({ username: req.headers.user});
    console.log(admin);
    if(admin){
    await course.save();
    admin.createdCourses.push(courseId);
    await admin.save(); 
    res.json({ message: 'Course created successfully', courseId: course.id });
    } else {
      res.status(403).json({ message: 'admin not found' });
    }
    }else {
      res.status(404).json({ message: 'Course not created' });
    }
  });
  
  router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
  router.get('/courses', authenticateJwt, async (req, res) => {
    const admin = await Admin.findOne({username:req.headers.user}).populate('createdCourses');
    if (admin) {
      res.json({ createdCourses: admin.createdCourses || [] });
    } else {
      res.status(403).json({ message: 'not found' });
    }
  });
  
  router.get('/course/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    res.json({ course });
  });

  export default router;