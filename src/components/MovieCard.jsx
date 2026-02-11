import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";

const imageURL = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie, showLink = true }) => {
  const imagePath = `${imageURL}${movie.poster_path}`;
  const title = movie.title;
  const voteAverage = movie.vote_average;

  return (
    <div className="movie-card">
      <img src={imagePath} alt={title} />
      <h2>{title}</h2>
      <p>
        <FaStar /> {voteAverage}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  showLink: PropTypes.bool,
};
