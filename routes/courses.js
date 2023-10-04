import { Router } from "express";
import { get, post } from '../controllers/courses.js'

const coursesRouter = Router ();

// Daftar course kelas 
const courses = [
    { id: 1, name: 'Course 1'},
    { id: 2, name: 'Course 2'},
    { id: 3, name: 'Course 3'}
];

//Route untuk mendapatkan semua course 
coursesRouter.get("/", get);


//Route untuk mendapatkan course berdasarkan id 
coursesRouter.post("/:id", post);



export default coursesRouter; 