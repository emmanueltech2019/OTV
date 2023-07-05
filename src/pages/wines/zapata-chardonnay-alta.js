import React, { useState } from "react";
import bg from "@/assets/wines/zapata.png";
import wineImg from "@/assets/wines/zapata-chardonnay.png";
import Image from "next/image";
import Star from "@/assets/star.png";
import InfoIcon from "@mui/icons-material/Info";
import { ChevronRight } from "@mui/icons-material";
import EditableProgressBar from "@/components/ProgressBar";
import { Swiper, SwiperSlide } from "swiper/react";
import Flag from "@/assets/argentina-flag.png";
import StarIcon from "@mui/icons-material/Star";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";

function ZuccardiWine() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Hide scrollbars
  };

  const closeLightbox = () => {
    setLightboxImage("");
    setIsLightboxOpen(false);
    document.body.style.overflow = ""; // Restore scrollbars
  };
  return (
    <>
      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg">
          <div className="max-w-full max-h-full">
            <Image
              src={lightboxImage}
              alt="Lightbox Image"
              className="max-h-full mx-auto"
            />
            <button
              className="absolute top-4 right-4 text-white  text-3xl"
              onClick={closeLightbox}
            >
              <p className=" text-white">{/* &#x2716; */}x</p>
            </button>
          </div>
        </div>
      )}
      <Navbar2 />
      <div id="main " className="h-fit w-screen bg-gray-200">
        <div className="relative h-[70vh] bg-white">
          <Image src={bg} alt="" className="w-screen md:h-[50vh]" />
          <div
            className={` absolute top-5 left-[10vw] md:left-[15vw]  ${
              isLightboxOpen ? "backdrop-filter backdrop-blur-lg" : ""
            }`}
          >
            <Image
              src={wineImg}
              className="w-[40vw] h-[65vh] md:h-screen md:w-[20vw]"
              alt=""
              onClick={() => openLightbox(wineImg)}
            />
          </div>
          <div className="bg-white h-32 w-32 rounded-full absolute top-[200px] md:top-[300px] right-5 md:right-[42vw] flex flex-col justify-center items-center">
            <b className="text-3xl">4.8</b>
            <div className="flex items-center">
              <StarIcon className="w-[14px] h-[14px] text-[#53528f]" alt="" />
              <StarIcon className="w-[14px] h-[14px] text-[#53528f]" alt="" />
              <StarIcon className="w-[14px] h-[14px] text-[#53528f]" alt="" />
              <StarIcon className="w-[14px] h-[14px] text-[#53528f]" alt="" />
              <StarIcon className="w-[14px] h-[14px] text-[#53528f]" alt="" />
            </div>
            <span className="text-gray-700">996 rating</span>
          </div>
          <div className="flex flex-row bg-white pb-10 md:mt-[100px] md:my-[10px]">
            <div className="w-[50vw] h-fit"></div>
            <div className="w-[50vw] pr-10 flex flex-col justify-center md:justify-left items-center md:items-start">
              <div className=" mt-[70px] ">
                {/* <div className="bg-gray-500 h-20 w-20 rounded-full mt-10 ml-10"></div> */}
                <span className="text-[#53528f] text-2xl">
                Angélica Zapata</span>
                <br />
                <b>Chardonnay Alta</b>
              </div>
              <div className="rounded-l-lg border-l border-gray-500 text-gray-500 text-3xl text-center py-3 w-[180px] px-5 border mt-[40px]">
                R$ 100
              </div>
              {/* <span className="text-[#853924] text-2xl text-center">
              Best price from Pauillic winery
            </span> */}
            </div>
          </div>
        </div>


          <div className="bg-white my-3 py-5 px-3 text-gray-700 md:px-[300px] md:pt-[250px]">
            <h1 className="text-2xl">Taste Characteristics</h1>
            <span>Based on 6720 user reviews</span>
            <div className="px-[20px] flex flex-col space-y-5 my-5 justifify-center items-center">
              <div className="flex space-x-1">
                <span className="text-right block w-[20vw]">Light</span>
                <div className="bg-gray-200 rounded-full w-[60vw] h-[10px] mt-3"></div>
                {/* <EditableProgressBar pw={"600vw"}/> */}
                <span className="text-left block w-[20vw]">Bold</span>
              </div>
              <div className="flex space-x-1">
                <span className="text-right block w-[20vw]">Smooth</span>
                <div className="bg-gray-200 rounded-full w-[60vw] h-[10px] mt-3"></div>
                <span className="text-left block w-[20vw]">Tannic</span>
              </div>
              <div className="flex space-x-1">
                <span className="text-right">Dry</span>
                <div className="bg-gray-200 rounded-full w-[60vw] h-[10px] mt-3"></div>
                <span className="text-left">Sweet</span>
              </div>
              <div className="flex space-x-1">
                <span className="text-right">Soft</span>
                <div className="bg-gray-200 rounded-full w-[60vw] h-[10px] mt-3"></div>
                <span className="text-left">Acidic</span>
              </div>
            </div>
          </div>
          <div className="bg-white my-3 py-5 px-3 text-center flex flex-col md:flex-row justify-center md:justify-left items-center">
            <div>
              <h4 className="py-5 text-2xl font-bold pt-5">Region</h4>
              <div className="bg-gray-200 rounded-full py-2 px-5 flex justify-center items-center space-x-2">
                <Image
                  src={Flag}
                  alt={""}
                  className={"rounded-full h-10 w-10"}
                />
                <p className="pt-5">	Argentina, Mendoza</p>
              </div>
            </div>
            <div>
              <h4 className="py-5 text-2xl font-bold pt-5">Region style</h4>
              <div className="bg-gray-200 rounded-full py-3 px-10 ">
                <p className="pt-5">	Argentinian Chardonnay</p>
              </div>
            </div>
            {/* <div>
              <h4 className="py-5 text-2xl font-bold pt-5 ">Grapes</h4>
              <div className="bg-gray-200 rounded-full py-3 px-10">
                <p className="pt-5">Malbec</p>
              </div>
            </div> */}
            {/* <div>
              <h4 className="py-5 text-2xl font-bold">Alcohol (ABV)</h4>
              <div className=" rounded-full py-3 px-10">
                <p>13.5%</p>
              </div>
            </div>
            <div>
              <h4 className="py-5 text-2xl font-bold">Winemaker</h4>
              <div className="rounded-full py-3 px-10">
                <p>Alejandro vigil</p>
              </div>
            </div> */}
          </div> 
          {/* <div className="bg-white my-3 py-5 px-3 text-gray-700 ">
            <div className=" text-center flex flex-col  md:flex-row justify-center items-center">
              <div className="border-b border-gray-300">
                <h4 className="py-2 text-2xl  pt-5">
                  <b className="font-bold">93</b>/100
                </h4>
                <div className="rounded-full py-3 px-10">
                  <p>By Tim Atkin, 2 years ago</p>
                </div>
              </div>
              <div className="border-b border-gray-300">
                <h4 className="py-2 text-2xl  pt-5">
                  <b className="font-bold">93</b>/100
                </h4>
                <div className="rounded-full py-3 px-10">
                  <p>By Tim Atkin, 2 years ago</p>
                </div>
              </div>
              <div className="border-b border-gray-300">
                <h4 className="py-2 text-2xl  pt-5">
                  <b className="font-bold">93</b>/100
                </h4>
                <div className="rounded-full py-3 px-10">
                  <p>By Tim Atkin, 2 years ago</p>
                </div>
              </div>
              <div className="border-b border-gray-300">
                <h4 className="py-2 text-2xl  pt-5">
                  <b className="font-bold">93</b>/100
                </h4>
                <div className="rounded-full py-3 px-10">
                  <p>By Tim Atkin, 2 years ago</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex md:flex-row flex-col   md:w-screen">
            <div className="bg-white my-3 py-5 px-3 text-gray-700  md:w-1/2  md:pl-[200px]">
              <h1 className="bold pb-2 font-semibold md:text-2xl">Food Pairing</h1>
              <span>Lamb, Poultry and Beef</span>
              <div className="flex justify-between">
                <div className="flex py-3">
                  <InfoIcon />
                  <p className="pl-3">Serving Tips</p>
                </div>
                <ChevronRight />
              </div>
            </div>
            <div className="bg-white my-3 py-5 px-3 text-gray-700  md:w-1/2 md:pr-[200px]">
              <h1 className="bold pb-2 font-semibold md:text-2xl">Grape</h1>
              <div className="flex justify-between">
                <div className="flex py-3">
                  <InfoIcon />
                  <p className="pl-3">	Chardonnay</p>
                </div>
                <div className="flex">
                  <span>100%</span> <ChevronRight />
                </div>
              </div>
            </div>

          </div>
          <div className="bg-white my-3 py-5 px-3 text-gray-700 md:px-[200px]">
          <h1 className="bold pb-2 font-semibold md:text-2xl">
              Argentinian <br />
              <span>Malbec</span>
            </h1>
            <div className="flex flex-col justify-between border-t border-b py-3">
            <p>
            Argentinian Chardonnay wines are some of the most popular white wines in the country, but they are quickly gaining a reputation for being a stand-out region worldwide as well. There has been something of a revolution in the last few decades to seek out new and unique places to grow the grape, including extreme locations in the mountains.
              </p>
              {/* <p>
                Heavily dependent on where they are grown for variations in flavor, Argentina Malbec has quickly become the worlds favorite due to the Characteristics that the high altituse climate and soils imart to the fruit.
              </p> */}
            </div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper my-5 pb-10 px-10 text-center"
            >
              <SwiperSlide>
                <p className=" pb-5 px-5">
                  "Argentina was the first country to plant Chardonnay grapes at over 1000 meters above sea level. You would need to stack almost 4 Eiffel Towers to reach that height."
                  
                </p>
              </SwiperSlide>
              {/* <SwiperSlide>
                <p className=" pb-5 px-5">
                  "Growers invest fortunes in specialized netting to protect Malbec crops from frequent high altitude hail storms."
                </p>
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <p className=" pb-5 px-5">
                  "Significant portions of Argentina Malbec grows at altitude approaching 5000 feet (1500 meters)."
                </p>
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <p className=" pb-5 px-5">
                  "Nearly all Malbec grown in France is not used for blending."
                </p>
              </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="flex md:flex-row flex-col  w-screen">
          <div className="bg-white my-3 py-5 px-3 text-gray-700  md:w-1/2 md:pl-[200px]">
            <h1 className="bold pb-2 font-semibold md:text-2xl">Winemaker's notes</h1>
            <div className="flex justify-between">
              <p>
                Offers an intense golden color with light shades of green. The nose is rich and full-flavoursed, with vibrant citrus fruit and attractive minerality. On the palate, a smooth sweet entry leads to an unctuous, fresh wine, packed with ripe fruit and subtle vanilla. The finish is long and linegring with crisp, well-balanced acidity
              </p>
            </div>
          </div>
          <div className="bg-white my-3 py-5 px-3 text-gray-700 text-center  md:w-1/2 md:pr-[200px]">
            <h1 className="bold pb-2 md:text-2xl">Winery</h1>
            <div className=" text-2xl font-bold">
              <p>	Angélica Zapata</p>
            </div>
          </div>
          </div>
        {/* <div className="bg-white my-3 py-5 px-3 text-gray-700">
            <div className="px-[20px] flex flex-col space-y-5 my-5">
                <div className="flex space-x-1">
                    <span>Light</span>
                    <div className="bg-gray-200 rounded-full py-[1px] w-[60vw]"></div>
                    <span>Bold</span>
                </div>
                <div className="flex space-x-1">
                    <span>Smooth</span>
                    <div className="bg-gray-200 rounded-lg py-[1px] w-[60vw]"></div>
                    <span>Tannic</span>
                </div>
                <div className="flex space-x-1">
                    <span>Dry</span>
                    <div className="bg-gray-200 rounded-lg py-[1px] w-[60vw]"></div>
                    <span>Sweet</span>
                </div>
                <div className="flex space-x-1">
                    <span>Soft</span>
                    <div className="bg-gray-200 rounded-lg py-[1px] w-[60vw]"></div>
                    <span>Acidic</span>
                </div>

            </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default ZuccardiWine;
