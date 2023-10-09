import Articles from "../models/articles.js";

export const findArticlesById = async (id) => {
    return await Articles.findOne({ where: { id } });
  };
  
export const findArticlesAll = async () => {
    return await Articles.findAll();
};