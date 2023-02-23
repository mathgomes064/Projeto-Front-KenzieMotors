import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MotorcycleSection } from "./style"
import moto from "../../assets/moto.png"
import user from "../../assets/user.jpg"
import Slider from "react-slick"

export const Motorcycles = () =>{
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <MotorcycleSection>
            <div className="tittleDiv">
                <h1>Motos</h1>
            </div>
            <Slider {...settings}>
                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </MotorcycleSection>
    )
}