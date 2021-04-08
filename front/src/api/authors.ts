import {ApiService} from "../services/ApiService";
import {Author} from "../types/authors";

export const apiAuthorGetAll = async (): Promise<Author.Data[]> => {
  const { data } = await ApiService(true).get<Author.Data[]>('/authors')
  return data
}
