import { useState, useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import ReactPaginate from 'react-paginate';

import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal';

import { fetchMovies } from '../../services/movieService';
// ВИПРАВЛЕННЯ 1: Використовуємо 'import type' для імпорту інтерфейсів
import type { Movie, MoviesResponse } from '../../types/movie';

import css from './App.module.css';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { data, isLoading, isError } = useQuery<MoviesResponse>({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: query.trim() !== '',
    // ВИПРАВЛЕННЯ 2: keepPreviousData для v5 передається ось так
    placeholderData: keepPreviousData, 
  });

  const movies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 0;

  const handleSearch = (searchQuery: string) => {
    const trimmed = searchQuery.trim();

    if (!trimmed) {
      toast.error('Please enter a search query.');
      return;
    }
    
    // Уникнення повторного пошуку того ж самого запиту
    if (trimmed !== query) {
      setQuery(trimmed);
      setPage(1);
      setSelectedMovie(null);
    }
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  // Виправлення логіки toast (щоб не викликати під час рендеру)
  useEffect(() => {
    if (!isLoading && !isError && movies.length === 0 && query) {
      toast.error('No movies found for your request.');
    }
  }, [isLoading, isError, movies.length, query]);

  return (
    <div className={css.appContainer}>
      <Toaster position="top-right" />

      <SearchBar onSubmit={handleSearch} />

      {isLoading && <Loader />}

      {!isLoading && isError && <ErrorMessage />}

      {!isLoading && !isError && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelectMovie} />
      )}

      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
          renderOnZeroPageCount={null}
        />
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;