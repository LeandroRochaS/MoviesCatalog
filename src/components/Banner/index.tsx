import starSvg from "../../images/svg/star.svg";
import CardCategory from "../CardCategory";
import playSvg from "../../images/svg/play.svg";

export default function Banner() {
  return (
    <>
      <div className="banner-content container ">
        <h1
          className="banner-title mb-2 uppercase"
          style={{ fontWeight: "900" }}
        >
          The Witcher
        </h1>
        <div className="flex gap-2 mb-1">
          <div className="flex-aling-center pr-1 br-gray-2">
            <img src={starSvg} className="icon-small-2 mr-1" alt="18" />
            <span className="color-gold">8.1</span>
          </div>
          <div className="flex-aling-center pr-1 br-gray-2">
            <span className="color-white">Globo</span>
          </div>
          <div className="flex-aling-center">
            <span className="color-white">2020</span>
          </div>
        </div>
        <div className="categories flex gap-2 my-2">
          <CardCategory name="Action" />
          <CardCategory name="Adventure" />
          <CardCategory name="Fantasy" />
        </div>
        <p className="banner-description mb-2 color-white w-50">
          Geralt of Rivia, a solitary monster hunter, struggles to find his
          place in a world where people often prove more wicked than beasts.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ullam autem tempora sint optio perferendis animi harum pariatur
        </p>
        <div className="banner-buttons flex">
          <button className="btn-banner mr-2 flex-aling">
            <img src={playSvg} className="mr-1  icon-small " />
            <p className=" color-black"> Play</p>
          </button>

          <button className="btn-banner btn-list">
            <p className="color-white">Ver detalhes</p>
          </button>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </>
  );
}
