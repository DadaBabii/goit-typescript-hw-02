import axios from "axios";

export const requestPhotosByQuery = async <T>(query:string = "", page:number = 1): Promise<T> => {
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const KEY = "tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U";

  const options = {
    params: {
      client_id: KEY,
      query: `${query}`,
      per_page: 20,
      page: `${page}`,
    },
  };

  const { data } = await axios.get(BASE_URL, options);

  return data;
};
