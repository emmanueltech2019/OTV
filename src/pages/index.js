import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Navbar2 from "@/components/Navbar2";
import Newsletter from "@/components/newsletter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2/>

      {/* <div className='main'> */}
      <Section1 />
      <div class="container">
        <div class="p-home__detailBannerHolder">
          <div class="m-detailBanner m-detailBanner--big">
            <div class="m-detailBanner__breadcrumbs"></div>
            <div class="m-detailBanner__heading-line">
              <div class="m-detailBanner__heading-line--filler"></div>
              <div class="m-detailBanner__heading-line--wrapper">
                <h1 class="m-detailBanner__heading element-invisible">
                  &lt;div&gt;Search for Places, People and
                  Experiences&lt;/div&gt;
                </h1>
                <h2
                  class="m-detailBanner__heading text-white"
                  style={{ color: "#fff" }}
                >
                  <div>Search for Places, People and Experiences</div>
                </h2>
              </div>
              <div class="m-detailBanner__heading-line--filler"></div>
            </div>
            <button type="button" class="m-detailBanner__searchBtn"></button>
            <div class="m-detailBanner__searchBar">
              <div id="a-searchBar--focus-holder">
                <div id="a-searchBar-main" class="a-searchBar --blueGradient ">
                  <input
                    id="search-bar-input"
                    type="text"
                    name="main"
                    placeholder="Search..."
                    aria-label="main"
                  />
                  <div class="searchbar--search__icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section2 text={"Best Red wine"} color={"#fff"} pt={"0px"} />
      <Section2 text={"Best White wine"} color={"#000"} pt={"100px"} />
      <Section2 text={"Best Desert wine"} color={"#000"} pt={"100px"} />
      <Section2 text={"Best Rosé wine"} color={"#000"} pt={"100px"} />
      <Section2 text={"Best Fortified wine"} color={"#000"} pt={"100px"} />
      {/* </div> */}
      <Newsletter/>
      <Footer />
    </>
  );
}
