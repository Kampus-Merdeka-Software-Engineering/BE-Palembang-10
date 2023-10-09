import Videos from "../models/video.js";

export const findVideoById = async (id) => {
    return await Videos.findOne({ where: { id } });
  };

  export const findVideoAll = async () => {
    return await Videos.findAll();
};