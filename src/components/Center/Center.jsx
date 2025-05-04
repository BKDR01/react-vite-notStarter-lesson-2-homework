import React, { useEffect, useRef, useState } from 'react'
import Vegetibele from './../../assets/img/Image.png';
import { FaLocationDot } from "react-icons/fa6";
import burger from './../../assets/img/Frame 40.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import locationIo from './../../assets/img/Icons.png';
import icon2 from './../../assets/img/Icons(1).png';
import icon3 from './../../assets/img/Icons (2).png';
import icon4 from './../../assets/img/Donut.png';

import './../../i18n'
import { useTranslation } from "react-i18next";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Center = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { t } = useTranslation();
    

    useEffect(() => {
        if (
          swiperInstance &&
          prevRef.current &&
          nextRef.current &&
          swiperInstance.params?.navigation
        ) {
          swiperInstance.params.navigation.prevEl = prevRef.current;
          swiperInstance.params.navigation.nextEl = nextRef.current;
          swiperInstance.navigation.destroy(); 
          swiperInstance.navigation.init();
          swiperInstance.navigation.update();
        }
      }, [swiperInstance, prevRef, nextRef]);
      
      


  return (
    <>
        <section>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-[100%] h-[575px] flex items-center justify-center gap-[16px] bg-white'>
                <div>
                    <img src={Vegetibele} className='mb-[32px] rounded-[16px]' alt="ovqat" />
                    <div>
                        <h2>{t("GreysVage")}</h2>
                        <button className='w-[204px] h-[42px] rounded-[8px] text-[22px] font-bold flex items-center justify-center gap-[10px] text-[#F17228] bg-[#FEF1EA]'>{t("6Days")}</button>
                    </div>
                </div>
                <div>
                    <img src={Vegetibele} className='mb-[32px] rounded-[16px]' alt="ovqat" />
                    <div>
                        <h2>{t("GreysVage")}</h2>
                        <button className='w-[204px] h-[42px] rounded-[8px] text-[22px] font-bold flex items-center justify-center gap-[10px] text-[#F17228] bg-[#FEF1EA]'>{t("7Days")}</button>
                    </div>
                </div>
                <div>
                    <img src={Vegetibele} className='mb-[32px] rounded-[16px]' alt="ovqat" />
                    <div>
                        <h2>{t("GreysVage")}</h2>
                        <button className='w-[204px] h-[42px] rounded-[8px] text-[22px] font-bold flex items-center justify-center gap-[10px] text-[#F17228] bg-[#FEF1EA]'>{t("8Days")}</button>
                    </div>
                </div>
                <div>
                    <img src={Vegetibele} className='mb-[32px] rounded-[16px]' alt="ovqat" />
                    <div>
                        <h2>Greys Vage</h2>
                        <button className='w-[204px] h-[42px] rounded-[8px] text-[22px] font-bold flex items-center justify-center gap-[10px] text-[#F17228] bg-[#FEF1EA]'>{t("8Days")}</button>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"  style={{ background: "linear-gradient(180deg, rgba(255, 206, 103, 0.22) -42.47%, rgba(253, 237, 202, 0) 100%)"}} className='w-[100%] h-[518px] text-center content-center'>
                <h2 className='text-[#F17228] text-[43px] font-bold mb-[72px]'>{t("docTitle")}</h2>
                <div className='w-[1324px] h-[239px] flex justify-between items-center mx-auto'>
                    <div className='text-center w-[307px] h-[239px]'>
                        <img src={locationIo} className='mx-auto' alt="" />
                        <h2 className='font-bold text-[22px]'>{t("docDiv1Title")}</h2>
                        <p className='text-[#9E9E9E]'>{t("docdiv1SubTitle")}</p>
                    </div>
                    <div className='text-center w-[307px] h-[239px]'>
                        <img src={icon2} className='mx-auto' alt="" />
                        <h2 className='font-bold text-[22px]'>{t("docdiv2Title")}</h2>
                        <p className='text-[#9E9E9E]'>{t("docdiv2SubTitle")}</p>
                    </div>
                    <div className='text-center w-[307px] h-[239px]'>
                    <img src={icon3} className='mx-auto' alt="" />
                    <h2 className='font-bold text-[22px]'>{t("docdiv3Title")}</h2>
                        <p className='text-[#9E9E9E]'>{t("docdiv3SubTitle")}</p>
                    </div>
                    <div className='text-center w-[307px] h-[239px]'>
                    <img src={icon2} className='mx-auto' alt="" />
                    <h2 className='font-bold text-[22px]'>{t("dovdiv4Title")}</h2>
                        <p className='text-[#9E9E9E]'>{t("docdiv4SubTitle")}</p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-[100%] h-[615px] content-center '>
                <h2 className='text-[#212121] text-[43px] font-bold mb-[72px] text-center'>{t("popularItemsTitle")}</h2>
                <div className='w-[100%] h-[469px] flex justify-center gap-[50px] items-center mx-auto'>

                <div ref={prevRef}  className='bg-[#FFB20E] w-[76px] h-[75px] rounded-[50%] text-center content-center text-white font-bold text-[64px]'><IoIosArrowBack /></div>
                
                <Swiper
                   onSwiper={setSwiperInstance}
                   modules={[Navigation, Pagination]}
                   spaceBetween={50}
                   slidesPerView={4}
                   className="w-[1500px] h-[500px]"
                    >
                <SwiperSlide>

                     <div className='w-[283px] h-[469px]'>
                        <img src={burger} className='mb-[16px]' alt="" />
                        <h2 className='text-[#424242] font-bold text-[22px] mb-[8px]'>{t("cheeseBurger")}</h2>
                        <h2 className='text-[#FFB30E] text-[22px] flex gap-[8px] items-center mb-[8px]'><FaLocationDot /> Burger Arena</h2>
                        <h2 className='font-bold text-[22px] text-[#212121] mb-[16px]'>$3.88</h2>
                        <button className='text-white font-bold bg-[#F17228] text-[18px] rounded-[8px] w-[283px] h-[60px]'>Order Now</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[283px] h-[469px]'>
                        <img src={burger} className='mb-[16px]' alt="" />
                        <h2 className='text-[#424242] font-bold text-[22px] mb-[8px]'>{t("toffesCake")}</h2>
                        <h2 className='text-[#FFB30E] text-[22px] flex gap-[8px] items-center mb-[8px]'><FaLocationDot /> Top Sticks</h2>
                        <h2 className='font-bold text-[22px] text-[#212121] mb-[16px]'>$4.00</h2>
                        <button className='text-white font-bold bg-[#F17228] text-[18px] rounded-[8px] w-[283px] h-[60px]'>Order Now</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[283px] h-[469px]'>
                        <img src={burger} className='mb-[16px]' alt="" />
                        <h2 className='text-[#424242] font-bold text-[22px] mb-[8px]'>{t("dancake")}</h2>
                        <h2 className='text-[#FFB30E] text-[22px] flex gap-[8px] items-center mb-[8px]'><FaLocationDot /> Cake World</h2>
                        <h2 className='font-bold text-[22px] text-[#212121] mb-[16px]'>$1.99</h2>
                        <button className='text-white font-bold bg-[#F17228] text-[18px] rounded-[8px] w-[283px] h-[60px]'>Order Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[283px] h-[469px]'>
                        <img src={burger} className='mb-[16px]' alt="" />
                        <h2 className='text-[#424242] font-bold text-[22px] mb-[8px]'>{t("crispySandwich")}</h2>
                        <h2 className='text-[#FFB30E] text-[22px] flex gap-[8px] items-center mb-[8px]'><FaLocationDot />Fastfood Dine</h2>
                        <h2 className='font-bold text-[22px] text-[#212121] mb-[16px]'>$3.00</h2>
                        <button className='text-white font-bold bg-[#F17228] text-[18px] rounded-[8px] w-[283px] h-[60px]'>Order Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[283px] h-[469px]'>
                        <img src={burger} className='mb-[16px]' alt="" />
                        <h2 className='text-[#424242] font-bold text-[22px] mb-[8px]'>thaiSoup</h2>
                        <h2 className='text-[#FFB30E] text-[22px] flex gap-[8px] items-center mb-[8px]'><FaLocationDot /> Foody man</h2>
                        <h2 className='font-bold text-[22px] text-[#212121] mb-[16px]'>$2.79</h2>
                        <button className='text-white font-bold bg-[#F17228] text-[18px] rounded-[8px] w-[283px] h-[60px]'>Order Now</button>
                    </div>
                </SwiperSlide>
            
            </Swiper>

            <div ref={nextRef} className='bg-[#FFB20E] w-[76px] h-[75px] rounded-[50%] text-center content-center text-white font-bold text-[64px]'><IoIosArrowForward /></div>

                </div>
            </div>

        </section>
    </>
  )
}

export default Center
