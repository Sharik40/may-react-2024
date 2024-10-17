import {IUser} from "../components/models/IUser";
import axios from "axios";
import {IDummyJson} from "../components/models/IDummyJson";

export const getUsers = async () : Promise<IUser[]> => {
  return (await axios.get<IDummyJson>('https://dummyjson.com/users')).data.users;
}
