import {ApiService} from "../services/ApiService";
import {Publisher} from "../types/publisher";

export const apiLanguageGetAll = async (): Promise<Publisher.Data[]> => {
  const { data } = await ApiService(true).get<Publisher.Data[]>('/languages')
  return data
}
