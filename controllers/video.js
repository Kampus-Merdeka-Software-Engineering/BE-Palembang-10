import express from "express";
import { findVideoAll, findVideoById } from "../services/video.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";

export const getVideoById = async (request, response) => {
    const { id } = request.params;
    const video = await findVideoById(id);
  
    response.json({
      data: video,
      message: httpStatusMesage[response.statusCode],
    });
  };

  export const getAllVideos = async (req, res, next) => {
    try{
      const VideosList = await findVideoAll();
    
        if(!VideosList === null || VideosList.length === 0){
          res.status(404);
          res.json({
              message: "Data not found"
          });
          return;
        }
    
        res.json({
          data: VideosList,
          message: "Data successfully retrieved",
        });
      } catch (e){
        next(e);
      }
    };