/** @format */

// - IMPORTS -
import { useSelector } from "react-redux";

// - Details COMPONENT -
function Details() {
  // * Declaring movieDetails reducer state
  const movieDetails = useSelector((store) => store.movieDetails);
  // Logging
  console.log("\nmovieDetails is:", movieDetails);

  // * Declaring movieGenres reducer state
  const movieGenres = useSelector((store) => store.movieGenres);
  // Logging
  console.log("movieGenres is:", movieGenres);

  // - RENDERING -
  return (
    <div>
    {/* Movie */}
      <h2>{movieDetails.title}</h2>

      <img src={movieDetails.poster} />

      <p>{movieDetails.description}</p>

    {/* Movie Genres */}
      <h3>Genres</h3>
      {movieGenres.map((genre) => {
        return <p key={genre}>{genre}</p>
      })}
    </div>
  );
} // - END Details COMPONENT -

// * Exporting MovieList Component
export default Details;
