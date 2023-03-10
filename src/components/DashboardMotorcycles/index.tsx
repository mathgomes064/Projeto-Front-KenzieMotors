import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MotorcycleSection } from "./style";
import user from "../../assets/user.jpg";
import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/vehicle/vehicleContext";
import { useHistory } from "react-router-dom";

export const DashboardMotorcycles = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { getMotorcycles, allMotorcycles }: any = useContext(AuthContext);

  const history = useHistory();

  const routeChange = (id: string) => {
    let path = `product/` + id;
    history.push(path);
  };

  useEffect(() => getMotorcycles(), []);

  return (
    <MotorcycleSection>
      <div className="tittleDiv">
        <h1>Motos</h1>
      </div>
      {allMotorcycles.length === 0?
      (
        <div className="signDiv">
          <h1>Nenhuma moto resgistrado...</h1>
        </div>
      )
      :
      (
      <Slider {...settings}>
        {allMotorcycles?.map((motorcycle: any, index: any) => (
          <div
            key={index}
            className="card"
            onClick={() => {
              routeChange(motorcycle.id);
            }}
          >
            <div className="imgDiv">
              <img src={motorcycle.urlImage} alt="" />
            </div>
            <div className="divOne">
              <h1 style={{ fontFamily: "'Lexend', sans-serif" }}>
                {motorcycle.title}
              </h1>
              <p style={{ fontFamily: "'Inter', sans-serif" }}>
                {motorcycle.description}
              </p>
            </div>
            <div className="divTwo">
              <div>
                <img src={user} alt="" />
                <p style={{ fontFamily: "'Inter', sans-serif" }}>
                  {motorcycle.owner}
                </p>
              </div>
            </div>
            <div className="divTree">
              <div>
                <div>
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>
                    {motorcycle.mileage}Km
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>
                    {motorcycle.year}
                  </span>
                </div>
                <p style={{ fontFamily: "'Lexend', sans-serif" }}>
                  R${motorcycle.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      )
      }
    </MotorcycleSection>
  );
};
