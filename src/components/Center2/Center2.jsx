import React, { useEffect } from 'react'
import tools from './../../tools.js';
import time from './../../assets/img/time.png';
import loc from './../../assets/img/loc.png';
import birka from './../../assets/img/birka.png';
import left from './../../assets/img/left.png';
import Right from './../../assets/img/Right.png';
import { IoIosArrowForward } from "react-icons/io";

import './../../i18n'
import { useTranslation } from "react-i18next";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Center2 = () => {

    const data = tools
    console.log(data);
    const { t } = useTranslation();

    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <>
      <section>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-[100%] h-[571px] bg-[#FEFAF1] content-center'>
            <h2 className='text-center font-bold text-[#212121] text-[34px] mt-[82px] mb-[88px]'>{t("searchByFood")}</h2>
            <div className='flex gap-[34px] justify-center items-center'>
                {
                    data.map((item, index) => (
                            <div key={index} className='w-[218px] h-[270px]'>
                                <img src={item.Foodimg} className='rounded-[50%]' alt="" />
                                <h2 className='text-[#424242] text-center font-bold text-[22px] mt-[26px]'>{item.name}</h2>
                            </div>
                    ))
                }
            </div>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-[100%] h-[456px] bg-[#FEEFD0] flex justify-center items-center'>
            <div data-aos="flip-down" className='w-[1230px] h-[246px] rounded-[46px] flex justify-center px-[55px] gap-[55px] items-center bg-white' style={{boxShadow: '0px 27px 82px 0px #FFAE0047, 0px 14px 15px 0px #FFAE0003'}}>
                <div className='w-[318px] h-[136px] flex items-center justify-between'>
                    <img src={birka} alt="" />
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB3C00] to-[#FFB800] text-[35px] font-bold'>{t("dailyDiscounts")}</h2>
                </div>
                <div className='w-[2px] h-[96px] bg-[#CFCFCF]'></div>
                <div className='w-[318px] h-[136px] flex items-center justify-between'>
                    <img src={loc} alt="" />
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB3C00] to-[#FFB800] text-[35px] font-bold'>{t("liveTracing")}</h2>
                </div>
                <div className='w-[2px] h-[96px] bg-[#CFCFCF]'></div>
                <div className='w-[318px] h-[136px] flex items-center justify-between'>
                    <img src={time} alt="" />
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB3C00] to-[#FFB800] text-[30px] font-bold'>{t("quickDelivery")}</h2>
                </div>
            </div>
        </div>

        <div className='flex justify-center items-center w-[100%] h-[1267px]'>

            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-[1480px] h-[1107px] flex flex-wrap'>
                <div style={{boxShadow: '0px 14px 15px 0px rgba(124, 124, 124, 0.06), 0px 27px 82px 0px rgba(124, 124, 124, 0.28)',}} className='w-[1480px] h-[512px] rounded-[16px] flex justify-between items-center'>
                    <div className='w-[519px] h-[512px] flex items-center'>
                       <div className='w-[490px] h-[390px] pl-[56px]'>
                            <h2 className='text-[39px] text-[#353535] font-bold mb-[19px]'>{t("crispySandwichesTitle")}</h2>
                            <p className='text-[#616161B0] text-[18px] font-bold mb-[111px]'>{t("crispySandwichesDescription")}</p>
                             <button className='bg-[linear-gradient(92.84deg,_#FFB800_-47.72%,_#FF8A00_136.81%)] w-[407px] h-[60px] rounded-[8px] flex text-white font-bold text-[18px] items-center gap-[10px] justify-center shadow-[0px_14px_32px_0px_rgba(255,178,14,0.29),_0px_5px_8px_0px_rgba(222,151,0,0.24)]'>{t("crispySandwichesButton")} <IoIosArrowForward /></button>
                       </div>
                    </div>
                    <img src={Right} className='rounded-r-[16px]' alt="" />
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-[1480px] h-[512px] rounded-[16px] flex justify-between items-center'>
                    <img src={left} className='rounded-l-[16px]' alt="" />
                    <div className='w-[519px] h-[512px] flex items-center'>
                       <div className='w-[490px] h-[390px] pl-[56px]'>
                            <h2 className='text-[43px] text-[#353535] font-bold mb-[19px]'>{t("friedChickenTitle")}</h2>
                            <p className='text-[#616161B0] text-[18px] mb-[111px]'>{t("friedChickenDescription")}</p>
                             <button className='bg-[linear-gradient(92.84deg,_#FFB800_-47.72%,_#FF8A00_136.81%)] w-[407px] h-[60px] rounded-[8px] flex text-white font-bold text-[18px] items-center gap-[10px] justify-center shadow-[0px_14px_32px_0px_rgba(255,178,14,0.29),_0px_5px_8px_0px_rgba(222,151,0,0.24)]'>{t("friedChickenButton")} <IoIosArrowForward /></button>
                       </div>
                    </div>
                </div>

            </div>

        </div>

      </section>
    </>
  )
}

export default Center2
