import Email from "../models/email.js";

export const createEmail = async (email) => {
    return await Email.create({ email });
  };
  