/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { API } from "../../utils/Api";

type VideoCarouselProps = {
  id: string;
};

export function VideoCarousel({ id }: VideoCarouselProps) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    dots: false,

    responsive: [
      {
        breakpoint: 1200, // Adjusted breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    if (id) {
      API.get(`/movie/${id}/videos`).then((r) => {
        console.log(r.data);
        setVideos(r.data.results.slice(0, 10));
      });
    }
  }, [id]);

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div className="mt-7">
        <div>
          <h3 className="mb-3">Vídeos Relacionados</h3>
          {Array.isArray(videos) && videos.length > 0 && (
            <Slider {...settings}>
              {videos.map((video: any, index: number) => (
                <div key={index} onClick={() => handleVideoClick(video)}>
                  <iframe
                    title={`Video ${index + 1}`}
                    className="iframe-trailer-2"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    allowFullScreen
                  ></iframe>
                  {selectedVideo === video && <p>{video.name}</p>}
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
}
