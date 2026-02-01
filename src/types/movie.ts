export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average?: number; // Додано знак питання (необов'язкове поле)
  backdrop_path?: string; // Додано знак питання
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}