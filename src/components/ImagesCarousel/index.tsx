/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { API, baseURLImage } from "../../utils/Api";

type ImagesCarouselProps = {
  id: string;
};

export function ImagesCarousel({ id }: ImagesCarouselProps) {
  const [images, setImages] = useState([]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerPadding: "100px",
    dots: false,

    responsive: [
      {
        breakpoint: 1200, // Adjusted breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 1,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Adjusted breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (id) {
      API.get(`/movie/${id}/images`).then((r) => {
        console.log(r.data.posters);
        setImages(r.data.posters);
      });
    }
  }, [id]);

  return (
    <>
      <div className="mt-5">
        <div>
          <h3 className="mb-3">Imagens</h3>
          {Array.isArray(images) && images.length > 0 && (
            <Slider {...settings}>
              {images.map((image: any, index: number) => (
                <div key={index}>
                  <a
                    className="btn-clear"
                    download
                    target="_blank"
                    href={`${baseURLImage}/original/${image.file_path}`}
                  >
                    <img
                      src={`${baseURLImage}/original/${image.file_path}`}
                      alt={image.file_path}
                      className="img-fluid"
                    />
                  </a>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
}
