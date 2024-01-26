/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { API } from "../../utils/Api";
import Card from "../../components/Card";

export default function Search() {
  const { word_search } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState<any>([]);
  const [form, setForm] = useState({ search: "" });

  useEffect(() => {
    console.log(word);
    if (word) {
      console.log(word);
      API.get(
        `/search/movie?query=${word}&include_adult=false&language=pt-BR&page=1`
      ).then((response) => {
        console.log(response.data);
        setSearch(response.data.results);
      });
    }
  }, [word, word_search]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(e: any) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    setWord(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSearch(e: any) {
    e.preventDefault();

    setWord(form.search);
  }
  return (
    <>
      <Header />
      <section className="container  mt-9">
        <div className="bg-section">
          <h6 className="uppercase color-primary text-center">resultados</h6>

          <h4 className="text-center">"{word}"</h4>

          <form onSubmit={handleSearch}>
            <div className="row ">
              <div className="grid-3 disappear"></div>
              <div className="grid-6 flex-column-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Buscar"
                  className="mb-3"
                  onChange={onChange}
                />
                <button className="btn-login ml-2"> Buscar</button>
              </div>
              <div className="grid-3 disappear"></div>
            </div>
          </form>

          <h3>Resultados</h3>

          <div className="row container-search">
            {search &&
              search.map((movie: any) => <Card key={movie.id} movie={movie} />)}
          </div>
        </div>
      </section>
    </>
  );
}
