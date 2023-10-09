import Courses from "../models/courses.js";

export const findCoursesById = async (id) => {
    return await Courses.findOne({ where: { id } });
  };
  
export const findCoursesAll = async () => {
    return await Courses.findAll();
};