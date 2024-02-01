import { MovieInfo } from "../../utils/types";
import starSvg from "../../images/svg/star.svg";
import { baseURLImage } from "../../utils/Api";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

interface CarouselProps {
  data: MovieInfo[];
}

export default function Carousel(props: CarouselProps) {
  const { data } = props;

  useEffect(() => {
    console.log("Componente Carousel montado.");
    console.log(data);
    // Qualquer código que você queira executar quando o componente for montado.
  }, [data]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    dots: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2, // Ajustado para 2
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Ajustado para 1
          slidesToScroll: 2, // Ajustado para 1
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="card ml-1" key={index}>
            <div className="card-image">
              <img
                src={`${baseURLImage}/w300/${item.poster_path}`}
                alt={item.title}
                className="card-image"
              />
            </div>
            <div className="card-info">
              <div className="card-info-title">
                <Link to={`/movie/${item.id}`}>
                  <h6>{item.title}</h6>
                </Link>
              </div>
              <div className="card-info-rating flex mt-1">
                <div className="flex br-gray-3 mr-2 mb-1">
                  <img src={starSvg} alt="18" className="icon-small mr-1 " />
                  <span className="color-gold pr-2">
                    {item.vote_average.toFixed(1)}
                  </span>
                </div>
                <div>
                  <p className="card-info-description color-white">
                    {item.release_date.split("-")[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
