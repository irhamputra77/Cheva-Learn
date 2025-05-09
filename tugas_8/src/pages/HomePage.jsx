import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios.get("https://nonskuy-backend.vercel.app/api/movie").then((res) => {
      setMovies(res.data.data.movies);
    });
  }, []);

  return (
    <>
      <main className="h-max px-36">
        <h1 className="text-2xl text-white font-bold mt-5">List Movie</h1>
        <div className="mt-4 grid grid-cols-6 gap-4">
          {!movies ? (
            <h1 className="text-xl text-slate-300 font-bold mt-5">Data kosong</h1>
          ) : (
            movies.map((item, index) => {
              return <MovieCard key={index} data={item} />;
            })
          )}
        </div>
      </main>
    </>
  );
}
