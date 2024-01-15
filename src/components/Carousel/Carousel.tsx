import { MovieInfo } from "../../utils/types";
import starSvg from "../../images/svg/star.svg";
import { baseURLImage } from "../../utils/Api";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  data: MovieInfo[];
}

export default function Carousel(props: CarouselProps) {
  const { data } = props;

  useEffect(() => {
    console.log("Componente Carousel montado.");
    console.log(data);
    // Qualquer código que você queira executar quando o componente for montado.
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="card ml-1" key={item.id}>
            <div className="card-image">
              <img
                src={`${baseURLImage}/w300/${item.poster_path}`}
                alt={item.title}
                className="card-image"
              />
            </div>
            <div className="card-info">
              <div className="card-info-title">
                <h6>{item.title}</h6>
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
