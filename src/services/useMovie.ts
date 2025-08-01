import { useQuery } from "@tanstack/vue-query";
import { getMovieDetail, getMovies } from "./movies";
import { useMovieStore } from "../stores/movieStore";
import { computed } from "vue";

const useFetchMovies = () => {
  const store = useMovieStore();

  const keyword = computed(() => store.keyword);
  const page = computed(() => store.currentPage);

  return useQuery({
    queryKey: computed(() => ["movies", keyword.value, page.value]),
    queryFn: async () => await getMovies(keyword.value, page.value),
  });
};

const useFetchTop3Movies = () => {
  const store = useMovieStore();

  const keyword = computed(() => store.keyword);

  return useQuery({
    queryKey: computed(() => ["top3Movies", keyword.value]),
    queryFn: async () => {
      const response = await getMovies(keyword.value, 1);
      return { ...response, Search: response.Search.slice(0, 3) };
    },
  });
};

const useFetchMovieDetail = (id: string) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetail(id),
  });

export { useFetchMovieDetail, useFetchMovies, useFetchTop3Movies };
