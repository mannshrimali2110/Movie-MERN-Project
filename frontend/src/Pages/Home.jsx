import React from "react";
import Genresearch from "./GenreSearch";
import MovieCarousel from "./Slider";
import Search from "./MovieSearch";

export default function Home() {
  return (
    <>
      <Search />
      <MovieCarousel />
      <hr />
      <Genresearch />
    </>
  );
}
