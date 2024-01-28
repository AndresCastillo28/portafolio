import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import secure_card from "../../assets/secure-card.png";
import my_bot_image from "../../assets/my-bot.png";
import seysatra_image from "../../assets/seysatra.png";
import sisbel_image from "../../assets/sisbel.png";
import portafolio_image from "../../assets/portafolio.png";

import "./portafolio.css";
import { Card, CardBody, Image } from "@nextui-org/react";

export const Portafolio = () => {
  return (
    <div className="section" id="portafolio">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center h2 text-accent mb-4"
        >
          Portafolio
        </motion.h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <Card>
              <CardBody className="overflow-visible ">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={secure_card}
                />
                <p className="text-center">Tarjeta Segura</p>
                <p>
                  Web application for the South Colombian university focused on
                  safety and health at work to report incidents at the
                  university
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardBody className="overflow-visible ">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={seysatra_image}
                />
                <p className="text-center">Seysatra</p>
                <p>
                  Web application for the South Colombian university focused on
                  occupational health to provide support to health professionals
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardBody className="overflow-visible ">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={my_bot_image}
                />
                <p className="text-center">MyBot</p>
                <p>
                  Conversational AI that empowers your company with personalized
                  communication on each channel
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardBody className="overflow-visible ">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={sisbel_image}
                />
                <p className="text-center">Sisbel</p>
                <p>
                  Web application for scrutiny in the 2023 territorial elections
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardBody className="overflow-visible ">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={portafolio_image}
                />
                <p className="text-center">Portafolio</p>
                <p>
                  Portfolio to publicize the professional profile of Andrés
                  Castillo
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow btn">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow btn">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
