import React, { useRef } from 'react'
import { FaMotorcycle } from "react-icons/fa";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Logo from './../../assets/img/Logo.png';
import './../../i18n'
import { useTranslation } from "react-i18next";
import havchik from './../../assets/img/ovqat.png';

const Golova = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
        <header className='bg-[#FFCA0B] w-[100%] h-[697px]'>
            <nav className='flex justify-between h-[78px] px-[220px] items-center bg-white'>
              <img src={Logo} alt="" />
              <div className='flex items-center gap-[10px]'>
                <div>   
                    <FaSearch className='absolute ml-[-25px] text-[#FFB30E] mt-[5px]'/>
                    <input className='w-[150px] text-[#424242] font-bold focus:outline-0' type="text" placeholder={t("Search")} />
                </div>
                <button className='shadow-[0px_20px_40px_0px_#FFAE004A] w-[118px] h-[46px] rounded-[8px]'>Login</button>
                <details>
              <summary
                style={{ listStyle: "none" }}
                className="px-[14px] py-[6px] w-[100px] text-center rounded-[6px] font-bold bg-white shadow-[0px_4px_4px_0px_#00000040] text-[13px] text-black"
              >
                {i18n.language === 'en'
                      ? 'English'
                      : i18n.language === 'ru'
                      ? 'Russia'
                      : 'Uzbek'}
              </summary>
              <div className="shadow-[0px_0px_11px_0px_#FFFFFF] rounded-[10px] w-[99px] h-[111px] bg-white mt-[10px] absolute flex flex-wrap justify-center items-center py-[11px]">
                <div onClick={() => changeLanguage('en')} className="w-[78px] h-[20px] bg-[#CDC9C9] text-black font-bold hover:bg-[#BFAFF2] hover:rounded-[10px] flex justify-center items-center text-[12px]">
                  English
                </div>
                <div onClick={() => changeLanguage('ru')} className="w-[78px] h-[20px] bg-[#CDC9C9] text-black font-bold hover:bg-[#BFAFF2] hover:rounded-[10px] flex justify-center items-center text-[12px]">
                  Russia
                </div>
                <div onClick={() => changeLanguage('uz')} className="w-[78px] h-[20px] bg-[#CDC9C9] text-black font-bold hover:bg-[#BFAFF2] hover:rounded-[10px] flex justify-center items-center text-[12px]">
                  Uzbek
                </div>
              </div>
            </details>
              </div>
            </nav>
            <div className='w-[100%] h-[620px] flex gap-[124px] items-center pl-[220px] overflow-hidden'>
              <div>
                <h2 className='text-white text-[88px] font-bold'>{t("marketingTitile")}</h2>
                <p className='text-[#504F4F] text-[22px] mb-[32px]'>{t("marketingSubTitle")}</p>
                <div className='w-[856px] h-[194px] rounded-[16px] bg-white'>

                  <div className='w-[100%] h-[86px] flex items-center pl-[24px] border-b-1 border-gray-300'>
                      <button className='text-[#757575] w-[148px] h-[38px] rounded-[8px] text-[15px] font-bold flex items-center justify-center gap-[10px] hover:text-[#F17228] hover:bg-[#FEF1EA]'><FaMotorcycle /> {t("Delivery")}</button>
                      <button className='text-[#757575] w-[129px] h-[38px] rounded-[8px] text-[15px] font-bold flex items-center justify-center gap-[10px] hover:text-[#F17228] hover:bg-[#FEF1EA]'><FaShoppingBag /> {t("Pickup")}</button>
                  </div>

                  <div className='flex justify-center items-center gap-[16px] w-[856px] h-[108px]'>
                    <FaLocationDot className='absolute text-[#FF7474] text-[24px] mr-[750px]'/>
                    <input type="text" className='bg-[#F5F5F5] text-[#504F4F] rounded-[8px] w-[593px] h-[49px] pl-[46px] focus:outline-0' placeholder={t("EmileInput")} />
                    <button className='custom-gradient w-[199px] h-[60px] rounded-[8px] text-white flex justify-center items-center gap-[10px]'><FaSearch /> {t("FintBtn")}</button>
                  </div>

                </div>
              </div>


                  <img src={havchik} className='mt-[122px]' alt="" />
            </div>
        </header>
    </>
  )
}

export default Golova
