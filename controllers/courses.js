import express from "express";
import { findCoursesById, findCoursesAll } from "../services/courses.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";


export const getCoursesById = async (request, response) => {
    const { id } = request.params;
    const course = await findCoursesById(id);
  
    response.json({
      data: course,
      message: httpStatusMesage[response.statusCode],
    });
  };

export const getAllCourses = async (req, res, next) => {
  try{
    const CoursesList = await findCoursesAll();
  
      if(!CoursesList === null || CoursesList.length === 0){
        res.status(404);
        res.json({
            message: "Data not found"
        });
        return;
      }
  
      res.json({
        data: CoursesList,
        message: "Data successfully retrieved",
      });
    } catch (e){
      next(e);
    }
  };
