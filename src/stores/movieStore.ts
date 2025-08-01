import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    keyword: "test",
    currentPage: 1,
  }),
  actions: {
    setKeyword(k: string) {
      this.keyword = k;
      this.currentPage = 1;
    },
    setPage(p: number) {
      this.currentPage = p;
    },
  },
});
