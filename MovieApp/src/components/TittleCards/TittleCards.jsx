import React, { useEffect, useRef, useState } from 'react'
import './TittleCards.css'

const TittleCards = ({ tittle, category }) => {
  const cardsRef = useRef();
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const handleWheel = (event) => {
    event.preventDefault();

    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${category}`
        );

        const data = await response.json();

        console.log(data);

        if (data.Search) {
          setMovies(data.Search);
        }

      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();

  }, [category]);

  useEffect(() => {
    const element = cardsRef.current;

    if (!element) return;

    element.addEventListener('wheel', handleWheel);

    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='tittlecards'>

      <h2>{tittle ? tittle : "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>

        {movies.map((movie) => {
          return (
            <div className="card" key={movie.imdbID}>

              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "/placeholder.jpg"
                }
                alt={movie.Title}
              />

              <p>{movie.Title}</p>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default TittleCards;