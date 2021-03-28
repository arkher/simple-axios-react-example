import { requestApi } from "../api"
import { CatFact } from "../entities";

export const catFactsService = {
  get: async (): Promise<Array<CatFact>> => {
    const res = await requestApi<Array<CatFact>>({method: 'get', path: '/facts'});
    return res.data;
  }
}