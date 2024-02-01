/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { API } from "../../utils/Api";
import Slider from "react-slick";
import Card from "../../components/Card";

export default function Category() {
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);
  const [moviesCategory, setMoviesCategory] = useState([]);

  const settings = {
    centerPadding: "100px",
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,

    className: "card-categories",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          centerPadding: "100px",
          swipeToSlide: true,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    API.get(`/genre/movie/list?language=pt-BR`).then((r) => {
      console.log(r.data);
      setCategories(r.data.genres);
    });
  }, [activeCategoryId]);

  useEffect(() => {
    if (activeCategoryId > 0) {
      API.get(
        `/discover/movie?with_genres=${activeCategoryId}&language=pt-BR`
      ).then((r) => {
        setMoviesCategory(r.data.results);
        console.log(r.data);
      });
    }
  }, [activeCategoryId]);

  return (
    <>
      <Header />
      <section className="container  mt-9">
        <div className="bg-section">
          <div className="mt-5">
            <div className="mb-9">
              <h3 className="mb-5">Categorias</h3>
              <Slider {...settings}>
                {categories.map((category: any, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    <h5 className="text-center" style={{ cursor: "pointer" }}>
                      {category.name}
                    </h5>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="row container-search">
            {moviesCategory &&
              moviesCategory.map((movie: any) => (
                <Card key={movie.id} movie={movie} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
