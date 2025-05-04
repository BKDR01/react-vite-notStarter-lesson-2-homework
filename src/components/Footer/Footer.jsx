import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

import './../../i18n'
import { useTranslation } from "react-i18next";


const Footer = () => {

    const { t } = useTranslation();
    

  return (
    <>
        <footer className='w-[100%] h-[566px] bg-[#212121] flex justify-center items-center'>
            <div className='w-[1480px]  h-[254px] flex justify-between'>
                <div className='w-[607px] h-[186px] flex justify-between'>
                    <ul>
                        <li className='text-[22px] font-bold mb-[40px] text-white'>{t("footerCompany")}</li>
                        <div className='flex flex-wrap gap-[16px] justify-between w-[75px] h-[120px] '>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("aboutUs")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("team")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("careers")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("blog")}</li>
                        </div>
                    </ul>
                    <ul>
                        <li className='text-[22px] font-bold mb-[40px] text-white'>{t("footerContact")}</li>
                        <div className='flex flex-wrap gap-[16px] justify-between w-[140px] h-[120px] '>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("helpSupport")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("partnerWithUs")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("rideWithUs")}</li>
                        </div>
                    </ul>
                    <ul>
                        <li className='text-[22px] font-bold mb-[40px] text-white'>{t("footerLegal")}</li>
                        <div className='flex flex-wrap gap-[16px] justify-between w-[200px] h-[120px] '>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("termsConditions")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("refundCancellation")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("privacyPolicy")}</li>
                            <li className='text-[#F5F5F5] text-[18px]'>{t("cookiePolicy")}</li>
                        </div>
                    </ul>
                </div>

                <div className='w-[483px] h-[234px] '>
                    <h2 className='text-[18px] text-[#A0A0A0] font-bold'>{t("followUs")}</h2>
                    <div className='flex gap-[16px] text-[#636363] mt-[40px] text-[24px]'>
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                    <div className='mt-[43px] w-[483px] h-[125px]'>
                        <p className='text-[#BBBBBB] font-bold'>{t("newsletterText")}</p>
                        <div className='flex items-center gap-[16px] mt-[33px]'>
                            <TbMailFilled className='text-[#ADADAD] text-[28px] ml-[16px] absolute'/>
                            <input type="email" placeholder={t("enterEmail")} className='w-[334px] h-[60px] text-[18px] pl-[50px] bg-[#424242] text-[#ADADAD] rounded-[8px] focus:outline-0'/>
                            <button className='bg-[linear-gradient(92.84deg,_#FFB800_-47.72%,_#FF8A00_136.81%)] w-[133px] h-[60px] rounded-[8px] flex text-white font-bold text-[18px] items-center gap-[10px] justify-center shadow-[0px_14px_32px_0px_rgba(255,178,14,0.29),_0px_5px_8px_0px_rgba(222,151,0,0.24)]'>{t("subscribe")}</button>
                        </div>
                    </div>
                </div> 
            </div>
        </footer>
    </>
  )
}

export default Footer
