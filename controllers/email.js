import express from "express";
import { createEmail } from "../services/email.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";
import Email from "../models/email.js";

export const postCreateEmail = async (request, response) => {
    const { email } = request.body;
    const createemail = await createEmail(email);
  
    console.log({ body: request.body });
    response.json({
      data: createemail,
      message: httpStatusMesage[response.statusCode],
    });
  };