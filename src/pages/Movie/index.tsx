/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API, baseURLImage } from "../../utils/Api";
import Header from "../../components/Header";
import CardCategory from "../../components/CardCategory";
import starSvg from "../../images/svg/star.svg";
import { goTopUp } from "../../utils/functions";
import { VideoCarousel } from "../../components/VideoCarousel";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import backSvg from "../../images/svg/back.svg";

export default function Movie() {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataMovie, setDataMovie] = useState<any>([]);
  const [trailer, setTrailer] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    goTopUp();

    API.get(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,images&language=pt-BR`
    ).then((response) => {
      setDataMovie(response.data);
      console.log(response.data);
      setTrailer(
        response.data.videos.results[response.data.videos.results.length - 1]
          .key
      );
    });
  }, [id]);

  useEffect(() => {
    if (trailer.name == undefined) {
      API.get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,images`
      ).then((response) => {
        setTrailer(
          response.data.videos.results[response.data.videos.results.length - 1]
            .key
        );
      });
    }
  }, [id, trailer]);

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <>
      <Header />
      {dataMovie && (
        <section className="container  mt-9">
          <a onClick={handleGoBack} style={{ cursor: "pointer" }}>
            <img src={backSvg} className="icon" />
          </a>
          <div className="row">
            <div className="grid-6 flex-column">
              <h1>{dataMovie.title}</h1>
              <p className="w-75 mt-3">{dataMovie.overview}</p>
              <div className="flex gap-2 mb-2 mt-3">
                <div className="flex-aling-center pr-2 br-gray-2">
                  <img src={starSvg} className="icon-small-2 mr-1" alt="18" />
                  <span className="color-gold">
                    {parseFloat(dataMovie.vote_average).toFixed(1)}
                  </span>
                </div>

                <div className="flex-aling-center">
                  <span className="color-white">
                    {dataMovie.release_date ? (
                      dataMovie.release_date
                        .replace("-", "/")
                        .replace("-", "/")
                        .replace("-", "/")
                    ) : (
                      <span>uai</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="categories flex gap-2 my-1">
                {dataMovie.genres &&
                  dataMovie.genres.map((item: any) => (
                    <CardCategory key={item.id} id={item.id} />
                  ))}
              </div>
              {trailer !== undefined ? (
                <iframe
                  className="iframe-trailer my-1"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <span>Trailer não disponível</span>
              )}

              <div className="flex gap-2 mb-1 mt-1">
                {dataMovie.production_companies &&
                  dataMovie.production_companies
                    .slice(0, 5)
                    .map((item: any) => (
                      <div
                        className="flex-start-row card-companie"
                        style={{ cursor: "pointer" }}
                        key={item.id}
                      >
                        <span className="color-white">{item.name}</span>
                      </div>
                    ))}
              </div>
            </div>

            <div
              className="grid-6 movie-banner"
              style={{
                backgroundImage: `url(${baseURLImage}/original/${dataMovie.poster_path})`,
              }}
            ></div>
          </div>

          <VideoCarousel id={dataMovie.id} />
          <ImagesCarousel id={dataMovie.id} />
        </section>
      )}
    </>
  );
}
