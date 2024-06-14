import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export const useUnsplashPhotos = (
  apiKey: string,
  page: number,
  perPage: number,
  orderBy: string
) => {
  const url = `https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&order_by=${orderBy}&client_id=${apiKey}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    photos: data,
    isLoading: !error && !data,
    isError: error,
  };
};
