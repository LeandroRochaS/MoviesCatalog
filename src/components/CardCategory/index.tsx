import { useEffect, useState } from "react";
import { API } from "../../utils/Api";

interface CardCategoryProps {
  id: number;
}

export default function CardCategory({ id }: CardCategoryProps) {
  const [category, setCategory] = useState({
    id: 0,
    name: "",
  });

  useEffect(() => {
    console.log("Componente CardCategory montado.");

    API.get(`/genre/movie/list?language=pt-BR`).then((response) => {
      // setCategories(response.data.genres);
      // response.data.find((item) => item.id == id );
      console.log(
        setCategory(
          response.data.genres.find((item: { id: number }) => item.id == id)
        )
      );
    });
  }, [id]);

  return (
    <>
      <div className="container-category flex-aling">
        <p className="category-title color-white p5 ">{category.name}</p>
      </div>
    </>
  );
}
