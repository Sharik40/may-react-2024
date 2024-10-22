import React from 'react';
import {useForm} from "react-hook-form";
import {IPost} from "../models/IPost";
import axios from "axios";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

const Form = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }
    } = useForm<IPost>({
        mode: 'all',
        resolver: joiResolver(postValidator)
    });

    const customHandler = (dataForm: IPost) => {
        const axiosPostInstance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            method: 'post'
        })
        axiosPostInstance.post('/posts', {dataForm}).then((response) => {
            console.log(response);
        })
    }

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
                    <input type={"number"} placeholder={"userId"} {...register('userId')}/>
                    <div>{errors.userId && errors.userId.message}</div>
                </label>
            </div>
            <div>
                <label>
                    <input type={"number"} placeholder={"id"} {...register('id')}/>
                    <div>{errors.id && errors.id.message}</div>
                </label>
            </div>
            <div>
                <label>
                    <input type={"text"} placeholder={"body"} {...register('body')}/>
                    <div>{errors.body && errors.body.message}</div>
                </label>
            </div>
            <div>
                <label>
                    <input type={"text"} placeholder={"title"} {...register('title')}/>
                    <div>{errors.title && errors.title.message}</div>
                </label>
            </div>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default Form;
