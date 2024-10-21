import axios from "axios";
import {IDJBase} from "../models/IDJBase";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/'
})


export const getAll = async <T>(page: number) => {
    const skip = (page - 1) * 20;

    return (await axiosInstance.get<IDJBase & T>('/products', {
        params: {
            skip: skip,
            limit: 20
        }
    })).data;
}
