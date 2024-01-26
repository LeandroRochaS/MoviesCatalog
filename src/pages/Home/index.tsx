import Banner from "../../components/Banner";
import Header from "../../components/Header";

import { API } from "../../utils/Api";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
  const [dataPopular, setDataPopular] = useState([]);
  const [dataUpComing, setDataUpComing] = useState([]);
  const [dataTopHatew, setDataTopHate] = useState([]); // [
  const [numberMovieBanner, setNumberMovieBanner] = useState(2);

  useEffect(() => {
    API.get("/trending/movie/day?language=pt-BR").then((response) => {
      setDataPopular(response.data.results);
    });

    API.get("/movie/upcoming?language=pt-BR").then((response) => {
      setDataUpComing(response.data.results);
    });

    API.get("/movie/top_rated?language=pt-BR").then((response) => {
      setDataTopHate(response.data.results);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberMovieBanner((prevNumber) => (prevNumber + 1) % 5);
    }, 8000);

    return () => clearInterval(interval);
  }, [dataTopHatew]);

  return (
    <>
      <Header />

      {dataPopular && (
        <Banner
          key={numberMovieBanner}
          dataMovie={dataPopular[numberMovieBanner]}
        />
      )}

      <section className="main container">
        <h3 className="mt-5 mb-5">Filmes Populares</h3>
        <Carousel data={dataPopular} />
      </section>
      <section className="main container">
        <h3 className="mt-5 mb-5">Mais Curtidos</h3>
        <Carousel data={dataTopHatew} />
      </section>
      <section className="main container">
        <h3 className="mt-5 mb-5">Lançamentos</h3>
        <Carousel data={dataUpComing} />
      </section>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
