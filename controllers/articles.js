import express from "express";
import { findArticlesById, findArticlesAll } from "../services/articles.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";


export const getArticlesById = async (request, response) => {
    const { id } = request.params;
    const articles = await findArticlesById(id);
  
    response.json({
      data: articles,
      message: httpStatusMesage[response.statusCode],
    });
  };

export const getAllArticles = async (req, res, next) => {
  try{
    const articleList = await findArticlesAll();
  
      if(!articleList === null || articleList.length === 0){
        res.status(404);
        res.json({
            message: "Data not found"
        });
        return;
      }
  
      res.json({
        data: articleList,
        message: "Data successfully retrieved",
      });
    } catch (e){
      next(e);
    }
  };
