import Joi from "joi";
import {IPost} from "../models/IPost";

export const  postValidator = Joi.object<IPost>({
    userId: Joi.number().integer().min(101).max(150).required().messages({
        "number.min" : "userId must be more than 101",
        "number.max" : "userId must be less than 150",
    }),
    id: Joi.number().integer().min(101).max(150).required().messages({
        "number.min" : "userId must be more than 101",
        "number.max" : "userId must be less than 150",
    }),
    body: Joi.string()
        .required()
        .min(2).message("must be more than 1 symbols")
        .max(7).message("must be less than 8 symbols")
        .pattern(/^[a-z]{2,7}$/).message("must be a word and lower case"),
    title: Joi.string()
        .required()
        .min(2).message("must be more than 1 symbols")
        .max(7).message("must be less than 8 symbols")
        .pattern(/^[a-z]{2,7}$/).message("must be a word and lower case")
})
