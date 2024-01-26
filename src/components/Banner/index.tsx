import starSvg from "../../images/svg/star.svg";
import CardCategory from "../CardCategory";
import playSvg from "../../images/svg/play.svg";
import { MovieInfo } from "../../utils/types";
import { baseURLImage } from "../../utils/Api";
import Slider from "react-slick";
import { Link } from "react-router-dom";

type BannerProps = {
  dataMovie: MovieInfo;
};

export default function Banner({ dataMovie }: BannerProps) {
  console.log(dataMovie);

  return (
    <>
      {dataMovie && (
        <div
          className="banner"
          style={{
            backgroundImage: `url(${baseURLImage}/original/${dataMovie.backdrop_path})`,
          }}
        >
          <div className="banner-opacity"></div>
          <div className="banner-content container ">
            <h1
              className="banner-title mb-2 uppercase"
              style={{ fontWeight: "900" }}
            >
              {dataMovie.title}{" "}
            </h1>
            <div className="flex gap-2 mb-1">
              <div className="flex-aling-center pr-1 br-gray-2">
                <img src={starSvg} className="icon-small-2 mr-1" alt="18" />
                <span className="color-gold">
                  {dataMovie.vote_average.toFixed(1)}
                </span>
              </div>

              <div className="flex-aling-center">
                <span className="color-white">
                  {dataMovie.release_date.split("-")[0]}
                </span>
              </div>
            </div>
            <div className="categories flex gap-2 my-2">
              {dataMovie.genre_ids.map((item) => (
                <CardCategory key={item} id={item} />
              ))}
            </div>
            <p className="banner-description mb-2 color-white w-50">
              {dataMovie.overview.slice(0, 120)}...
            </p>
            <div className="banner-buttons flex">
              <button className="btn-banner btn-list">
                <Link to={`/movie/${dataMovie.id}`}>
                  <p className="color-white">Ver detalhes</p>
                </Link>
              </button>
            </div>
          </div>
          <div className="banner-fadeBottom"></div>
        </div>
      )}
    </>
  );
}
