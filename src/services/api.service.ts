import axios from "axios";
import {IDJBase} from "../models/IDJBase";
import {IProducts} from "../models/IProducts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export const getProducts = async (page: number) => {
    const skip = (page - 1) * 30;

    return (await axiosInstance.get<IDJBase & { products: IProducts[] }>('/products', {
        params: {
            skip: skip
        }
    })).data;
}
