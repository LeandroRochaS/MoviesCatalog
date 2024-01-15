interface CardCategoryProps {
  name: string;
}

export default function CardCategory({ name }: CardCategoryProps) {
  return (
    <>
      <div className="container-category flex-aling">
        <p className="category-title color-white p5 ">{name!}</p>
      </div>
    </>
  );
}
