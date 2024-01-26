/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { MovieInfo } from "../../utils/types";
import { baseURLImage } from "../../utils/Api";
import starSvg from "../../images/svg/star.svg";

type CardProps = {
  movie: MovieInfo;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Card({ movie }: CardProps) {
  console.log(movie);

  return (
    <>
      {" "}
      <div
        className="
grid-3 card-2 b-black p-0"
      >
        <div className="card ml-1">
          <div className="card-image">
            <img
              src={`${baseURLImage}/w300/${movie.poster_path}`}
              alt={movie.title}
              className="card-image"
            />
          </div>
          <div className="card-info">
            <div className="card-info-title">
              <Link to={`/movie/${movie.id}`}>
                <h6>{movie.title}</h6>
              </Link>
            </div>
            <div className="card-info-rating flex mt-1">
              <div className="flex br-gray-3 mr-2 mb-1">
                <img src={starSvg} alt="18" className="icon-small mr-1 " />
                <span className="color-gold pr-2">
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
              <div>
                <p className="card-info-description color-white">
                  {movie.release_date.split("-")[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
