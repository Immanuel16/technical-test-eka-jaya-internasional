import { BaseResponseMovies, fetcher } from "./http";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type Movies = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie";
  Poster: string;
};

type MovieDetail = Movies & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
};

const getMovies = async (
  keyword: string,
  page: number
): Promise<BaseResponseMovies<Movies>> =>
  fetcher.get(API_BASE_URL, { params: { s: keyword, page } });

const getMovieDetail = async (id: string): Promise<MovieDetail> =>
  fetcher.get(API_BASE_URL, {
    params: { i: id, plot: "full" },
  });

export { getMovieDetail, getMovies };
