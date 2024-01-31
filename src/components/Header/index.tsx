import searchSvg from "../../images/svg/search.svg";
import logoSvg from "../../images/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    const search = document.getElementById("text-search") as HTMLInputElement;
    console.log(search.value);

    navigate(`/search/${search.value}`);
  }

  return (
    <>
      <header className="flex-space-between header ">
        <div className="header-left flex-space-between">
          <Link to={"/"} className="">
            <img src={logoSvg} alt="logo" className="icon mr-6" />
          </Link>
          <ul className="flex-space-between ">
            <li className="mr-6">
              <Link to={"/"} className="p2">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link to={"/categories"} className="p2">
                Categorias
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-right flex-space-between">
          <form className="header-input mr-2 flex search">
            <input type="text" placeholder="Search" id="text-search" />
            <img
              src={searchSvg}
              alt="search"
              onClick={handleSubmit}
              className="w-50 icon-s"
            />
          </form>
        </div>
      </header>
    </>
  );
}
