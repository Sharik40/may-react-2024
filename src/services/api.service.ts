import axios from "axios";
import {IUser} from "../models/IUser";
import {BsRsType} from "../models/BsRsType";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({baseURL: 'https://dummyjson.com'});

export const getUsers = async () => {
    let axiosResponse = await axiosInstance.get<BsRsType & {users: IUser[]}>('/users');
    return axiosResponse.data;
}

export const getPosts = async () => {
    let axiosResponse = await axiosInstance.get<BsRsType & {posts: IPost[]}>('/posts');
    return axiosResponse.data;
}

export const getComments = async () => {
    let axiosResponse = await axiosInstance.get<BsRsType & {comments: IComment[]}>('/comments');
    return axiosResponse.data;
}
