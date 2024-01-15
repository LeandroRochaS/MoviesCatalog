import Banner from "../../components/Banner";
import Header from "../../components/Header";

import { API } from "../../utils/Api";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
  const [dataPopular, setDataPopular] = useState([]);

  useEffect(() => {
    API.get("/trending/movie/day?language=pt-BR").then((response) => {
      setDataPopular(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <>
      <Header />
      <div
        className="banner"
        style={{
          backgroundImage: `url(${"https://i.pinimg.com/originals/cb/08/61/cb0861669c2e0a420b9607beaa691840.jpg"})`,
        }}
      >
        <div className="banner-opacity"></div>
        <Banner />
      </div>
      <section className="main container">
        <h1 className="mb-5">Main section</h1>
        <Carousel data={dataPopular} />
        <h4>salve</h4>
      </section>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
