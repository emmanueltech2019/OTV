import React from "react";

function Section2({text, color, pt}) {
  return (
    <div>
      <div className={`spacing--bottom--xxxl pt-[${pt}px]`}>
        <section className="o-horizontalScrollContainer">
          <div className="o-horizontalScrollContainer__heading container">
            <div className="m-containerIntro ">
              <div className="m-containerIntro__heading">
                <span className="m-containerIntro__topLine"></span>
                <h3 className="m-containerIntro__heading--text text-white" style={{color:color}}>
                  {text}
                </h3>
              </div>
            </div>
            <div className="o-horizontalScrollContainer__iconCTA--wrapper">
              <div className="a-iconCTA">
                <a
                  id="hSCiCTAId1"
                  className="a-iconCTA__prev a-iconCTA--inverse"
                  activeclassname="a-iconCTA__prev a-iconCTA--inverse"
                  aria-label="Scroll Left"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    className="a-icon a-icon--small "
                    aria-label="L"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  >
                    <use xlink:href="/assets/svg/sprite.svg#ico-caret-right-thick"></use>
                  </svg> */}
                </a>
                <a
                  id="hSCiCTAId2"
                  className="a-iconCTA__next a-iconCTA--inverse"
                  activeclassname="a-iconCTA__next a-iconCTA--inverse"
                  aria-label="Scroll Right"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    className="a-icon a-icon--small "
                    aria-label="L"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  >
                    <use xlink:href="/assets/svg/sprite.svg#ico-caret-right-thick"></use>
                  </svg> */}
                </a>
              </div>
            </div>
          </div>
          <div className="o-horizontalScrollContainer__content fullwidth">
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=wQFEyYj6 150w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=_tEH2n4V 250w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=4O6WBzMx 500w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=9rqQ4x2T 680w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dtEaxSHy 1000w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dw6by-mk 1200w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=wQFEyYj6 150w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=_tEH2n4V 250w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=4O6WBzMx 500w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=9rqQ4x2T 680w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dtEaxSHy 1000w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dw6by-mk 1200w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg 1280w"
                          src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dtEaxSHy"
                          alt="San Francisco"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=wQFEyYj6 150w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=_tEH2n4V 250w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=4O6WBzMx 500w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=9rqQ4x2T 680w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dtEaxSHy 1000w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dw6by-mk 1200w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=wQFEyYj6 150w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=_tEH2n4V 250w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=4O6WBzMx 500w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=9rqQ4x2T 680w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dtEaxSHy 1000w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dw6by-mk 1200w,
  https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg 1280w"
                          src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1685105378/WhatsApp_Image_2023-05-24_at_16.07.52_ydvcip.jpg?itok=dtEaxSHy"
                          alt="San Francisco"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="San Francisco"
                  title="San Francisco"
                  className="m-highlightCard__link"
                  href="/wine"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Red wine
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Purple Angel
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "66.7%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=nJIFRedv 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=DvuMU_1R 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=TU2VBFsN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=jfdALGyA 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=cS5a151B 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=Ezr6R_Mt 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg 2280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=nJIFRedv 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=DvuMU_1R 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=TU2VBFsN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=jfdALGyA 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=cS5a151B 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=Ezr6R_Mt 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg 2280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=cS5a151B"
                          alt="Los Angeles"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=nJIFRedv 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=DvuMU_1R 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=TU2VBFsN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=jfdALGyA 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=cS5a151B 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=Ezr6R_Mt 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg 2280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=nJIFRedv 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=DvuMU_1R 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=TU2VBFsN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=jfdALGyA 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=cS5a151B 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=Ezr6R_Mt 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg 2280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg?itok=cS5a151B"
                          alt="Los Angeles"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Los Angeles"
                  title="Los Angeles"
                  className="m-highlightCard__link"
                  href="/places-to-visit/los-angeles/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Los Angeles County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Los Angeles
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "66.7072%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=8yFGhEm3 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=PmUVPTAE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=rJdSOv8N 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=tUax8g3- 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=omBGkJoH 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=E_eXaLTn 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-07/OC_Anaheim%20Packing%20House.jpg 823w"
                        sizes="(max-width: 823px) 100vw, 823px"
                      />
                        <img
                          sizes="(max-width: 823px) 100vw, 823px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=8yFGhEm3 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=PmUVPTAE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=rJdSOv8N 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=tUax8g3- 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=omBGkJoH 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=E_eXaLTn 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-07/OC_Anaheim%20Packing%20House.jpg 823w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-07/OC_Anaheim%20Packing%20House.jpg"
                          alt="Anaheim"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=8yFGhEm3 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=PmUVPTAE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=rJdSOv8N 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=tUax8g3- 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=omBGkJoH 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=E_eXaLTn 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-07/OC_Anaheim%20Packing%20House.jpg 823w"
                          sizes="(max-width: 823px) 100vw, 823px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 823px) 100vw, 823px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=8yFGhEm3 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=PmUVPTAE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=rJdSOv8N 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=tUax8g3- 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=omBGkJoH 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-07/OC_Anaheim%20Packing%20House.jpg?itok=E_eXaLTn 823w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-07/OC_Anaheim%20Packing%20House.jpg 823w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-07/OC_Anaheim%20Packing%20House.jpg"
                          alt="Anaheim"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Anaheim"
                  title="Anaheim"
                  className="m-highlightCard__link"
                  href="/places-to-visit/anaheim/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Orange County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Anaheim
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=6pd9lOrQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=AzioMkdE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=99ZTL9qS 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=7l9ah4v4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=CKP9AU9_ 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=TRGQNG5a 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=6pd9lOrQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=AzioMkdE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=99ZTL9qS 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=7l9ah4v4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=CKP9AU9_ 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=TRGQNG5a 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=CKP9AU9_"
                          alt="San Diego"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=6pd9lOrQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=AzioMkdE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=99ZTL9qS 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=7l9ah4v4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=CKP9AU9_ 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=TRGQNG5a 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=6pd9lOrQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=AzioMkdE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=99ZTL9qS 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=7l9ah4v4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=CKP9AU9_ 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=TRGQNG5a 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SanDiego_Skyline_JohnBahu_1280x642_downsized.jpg?itok=CKP9AU9_"
                          alt="San Diego"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="San Diego"
                  title="San Diego"
                  className="m-highlightCard__link"
                  href="/places-to-visit/san-diego/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        San Diego County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        San Diego
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=Wfw9NNiY 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=8OpI4oXu 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=7RQrCTEF 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=RyDHBCjD 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=OhEFLfqT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=t9BIiMi5 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=Wfw9NNiY 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=8OpI4oXu 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=7RQrCTEF 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=RyDHBCjD 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=OhEFLfqT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=t9BIiMi5 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=OhEFLfqT"
                          alt="Santa Barbara"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=Wfw9NNiY 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=8OpI4oXu 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=7RQrCTEF 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=RyDHBCjD 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=OhEFLfqT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=t9BIiMi5 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=Wfw9NNiY 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=8OpI4oXu 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=7RQrCTEF 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=RyDHBCjD 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=OhEFLfqT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=t9BIiMi5 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlight_santabarbara_hero_st_rm_529573764_1280x640.jpg?itok=OhEFLfqT"
                          alt="Santa Barbara"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Santa Barbara"
                  title="Santa Barbara"
                  className="m-highlightCard__link"
                  href="/places-to-visit/santa-barbara/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Santa Barbara County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Santa Barbara
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50.2%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=bzhi9oLD 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=TgsoRXmh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=fjd7iho5 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=Ts2cYA7N 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=RGyoqlF7 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=cjdx7alR 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=bzhi9oLD 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=TgsoRXmh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=fjd7iho5 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=Ts2cYA7N 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=RGyoqlF7 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=cjdx7alR 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=RGyoqlF7"
                          alt="San Luis Obispo"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=bzhi9oLD 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=TgsoRXmh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=fjd7iho5 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=Ts2cYA7N 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=RGyoqlF7 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=cjdx7alR 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=bzhi9oLD 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=TgsoRXmh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=fjd7iho5 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=Ts2cYA7N 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=RGyoqlF7 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=cjdx7alR 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SLO_T6_CalPolyPeaks_DSCF4148RGB_1280x642.jpg?itok=RGyoqlF7"
                          alt="San Luis Obispo"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="San Luis Obispo"
                  title="San Luis Obispo"
                  className="m-highlightCard__link"
                  href="/places-to-visit/san-luis-obispo/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        San Luis Obispo County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        San Luis Obispo
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "66.5%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/monterey.jpg?itok=hDhMzF79 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/monterey.jpg?itok=jVxW2oOU 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/monterey.jpg?itok=U8bigkn2 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/monterey.jpg?itok=Hd_QFhz0 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/monterey.jpg?itok=jrmJLCfT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/monterey.jpg?itok=jWJhIZJi 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/monterey.jpg 1279w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/monterey.jpg?itok=hDhMzF79 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/monterey.jpg?itok=jVxW2oOU 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/monterey.jpg?itok=U8bigkn2 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/monterey.jpg?itok=Hd_QFhz0 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/monterey.jpg?itok=jrmJLCfT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/monterey.jpg?itok=jWJhIZJi 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/monterey.jpg 1279w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/monterey.jpg?itok=jrmJLCfT"
                          alt="Monterey"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/monterey.jpg?itok=hDhMzF79 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/monterey.jpg?itok=jVxW2oOU 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/monterey.jpg?itok=U8bigkn2 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/monterey.jpg?itok=Hd_QFhz0 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/monterey.jpg?itok=jrmJLCfT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/monterey.jpg?itok=jWJhIZJi 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/monterey.jpg 1279w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/monterey.jpg?itok=hDhMzF79 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/monterey.jpg?itok=jVxW2oOU 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/monterey.jpg?itok=U8bigkn2 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/monterey.jpg?itok=Hd_QFhz0 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/monterey.jpg?itok=jrmJLCfT 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/monterey.jpg?itok=jWJhIZJi 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/monterey.jpg 1279w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/monterey.jpg?itok=jrmJLCfT"
                          alt="Monterey"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Monterey"
                  title="Monterey"
                  className="m-highlightCard__link"
                  href="/places-to-visit/monterey/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Monterey County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Monterey
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50.2%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/palmsprings_1280x642.jpg?itok=cElO0BRC 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/palmsprings_1280x642.jpg?itok=B0ESS8Ju 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/palmsprings_1280x642.jpg?itok=0eLE4gqp 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/palmsprings_1280x642.jpg?itok=H67D6CEC 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/palmsprings_1280x642.jpg?itok=E7uWLA8j 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/palmsprings_1280x642.jpg?itok=PNyRBzXL 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/palmsprings_1280x642.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/palmsprings_1280x642.jpg?itok=cElO0BRC 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/palmsprings_1280x642.jpg?itok=B0ESS8Ju 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/palmsprings_1280x642.jpg?itok=0eLE4gqp 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/palmsprings_1280x642.jpg?itok=H67D6CEC 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/palmsprings_1280x642.jpg?itok=E7uWLA8j 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/palmsprings_1280x642.jpg?itok=PNyRBzXL 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/palmsprings_1280x642.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/palmsprings_1280x642.jpg?itok=E7uWLA8j"
                          alt="Palm Springs"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/palmsprings_1280x642.jpg?itok=cElO0BRC 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/palmsprings_1280x642.jpg?itok=B0ESS8Ju 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/palmsprings_1280x642.jpg?itok=0eLE4gqp 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/palmsprings_1280x642.jpg?itok=H67D6CEC 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/palmsprings_1280x642.jpg?itok=E7uWLA8j 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/palmsprings_1280x642.jpg?itok=PNyRBzXL 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/palmsprings_1280x642.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/palmsprings_1280x642.jpg?itok=cElO0BRC 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/palmsprings_1280x642.jpg?itok=B0ESS8Ju 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/palmsprings_1280x642.jpg?itok=0eLE4gqp 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/palmsprings_1280x642.jpg?itok=H67D6CEC 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/palmsprings_1280x642.jpg?itok=E7uWLA8j 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/palmsprings_1280x642.jpg?itok=PNyRBzXL 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/palmsprings_1280x642.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/palmsprings_1280x642.jpg?itok=E7uWLA8j"
                          alt="Palm Springs"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Palm Springs"
                  title="Palm Springs"
                  className="m-highlightCard__link"
                  href="/places-to-visit/palm-springs/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Riverside County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Palm Springs
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=1Etn_K7w 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=o23eIZMH 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=hG8aeYmn 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=P9OYfu1i 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=L_RlneBW 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=numqEtQU 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=1Etn_K7w 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=o23eIZMH 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=hG8aeYmn 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=P9OYfu1i 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=L_RlneBW 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=numqEtQU 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=L_RlneBW"
                          alt="Sonoma"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=1Etn_K7w 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=o23eIZMH 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=hG8aeYmn 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=P9OYfu1i 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=L_RlneBW 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=numqEtQU 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=1Etn_K7w 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=o23eIZMH 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=hG8aeYmn 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=P9OYfu1i 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=L_RlneBW 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=numqEtQU 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_SpotlightSonoma_Module8_DowntownSonoma_Stock_RM_BADFTY_1280x640.jpg?itok=L_RlneBW"
                          alt="Sonoma"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Sonoma"
                  title="Sonoma"
                  className="m-highlightCard__link"
                  href="/places-to-visit/sonoma/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Sonoma County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Sonoma
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=ewPvFZws 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=hPTbZi1Q 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=pSgR4w4W 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=yfuvgdp4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=seWXTbTr 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=qYj1HyE_ 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=ewPvFZws 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=hPTbZi1Q 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=pSgR4w4W 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=yfuvgdp4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=seWXTbTr 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=qYj1HyE_ 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=seWXTbTr"
                          alt="Sacramento"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=ewPvFZws 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=hPTbZi1Q 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=pSgR4w4W 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=yfuvgdp4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=seWXTbTr 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=qYj1HyE_ 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=ewPvFZws 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=hPTbZi1Q 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=pSgR4w4W 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=yfuvgdp4 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=seWXTbTr 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=qYj1HyE_ 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlightsacramento_sacramento_st_rf_187559989_1280x640.jpg?itok=seWXTbTr"
                          alt="Sacramento"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Sacramento"
                  title="Sacramento"
                  className="m-highlightCard__link"
                  href="/places-to-visit/sacramento/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Sacramento County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Sacramento
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=EI2wkeS8 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=h6tPkAs4 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=UAsohZ99 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=cNexTquO 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=KNSGjkQu 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=wDe2IPJG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=EI2wkeS8 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=h6tPkAs4 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=UAsohZ99 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=cNexTquO 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=KNSGjkQu 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=wDe2IPJG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=KNSGjkQu"
                          alt="Mendocino"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=EI2wkeS8 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=h6tPkAs4 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=UAsohZ99 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=cNexTquO 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=KNSGjkQu 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=wDe2IPJG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=EI2wkeS8 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=h6tPkAs4 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=UAsohZ99 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=cNexTquO 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=KNSGjkQu 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=wDe2IPJG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_crtr_borntobewild_module_mendocino_st_rf_623667652_1280x640.jpg?itok=KNSGjkQu"
                          alt="Mendocino"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Mendocino"
                  title="Mendocino"
                  className="m-highlightCard__link"
                  href="/places-to-visit/mendocino/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Mendocino County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Mendocino
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=zsO9Ik__ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=SsDfzuFO 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=v9rLy2s_ 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=0eSDebDd 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=Diifnsae 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=MXUOj0Yp 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=zsO9Ik__ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=SsDfzuFO 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=v9rLy2s_ 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=0eSDebDd 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=Diifnsae 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=MXUOj0Yp 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=Diifnsae"
                          alt="Santa Monica"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=zsO9Ik__ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=SsDfzuFO 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=v9rLy2s_ 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=0eSDebDd 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=Diifnsae 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=MXUOj0Yp 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=zsO9Ik__ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=SsDfzuFO 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=v9rLy2s_ 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=0eSDebDd 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=Diifnsae 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=MXUOj0Yp 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/SantaMonica_Beach_JoakimLloydRaboff_1280x642_1.jpg?itok=Diifnsae"
                          alt="Santa Monica"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Santa Monica"
                  title="Santa Monica"
                  className="m-highlightCard__link"
                  href="/places-to-visit/santa-monica/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Los Angeles County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Santa Monica
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=Raf7xqnQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=-hEnAQeG 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=RzUyETlu 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=xWbzXKPQ 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=e22MPNsg 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=4xSBFZPX 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=Raf7xqnQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=-hEnAQeG 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=RzUyETlu 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=xWbzXKPQ 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=e22MPNsg 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=4xSBFZPX 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=e22MPNsg"
                          alt="Napa"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=Raf7xqnQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=-hEnAQeG 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=RzUyETlu 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=xWbzXKPQ 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=e22MPNsg 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=4xSBFZPX 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=Raf7xqnQ 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=-hEnAQeG 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=RzUyETlu 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=xWbzXKPQ 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=e22MPNsg 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=4xSBFZPX 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VC_NapaSpotlight_Module4_DowntownNapa_Stock_RM_BP8CEE_1280x640.jpg?itok=e22MPNsg"
                          alt="Napa"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Napa"
                  title="Napa"
                  className="m-highlightCard__link"
                  href="/places-to-visit/downtown-napa/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Napa County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Napa
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=GNHpDPkG 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=n9GTk9kE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=U6sgFA3Q 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=cqgtuBJk 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=mbtDBoFE 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=_fT-Dylg 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=GNHpDPkG 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=n9GTk9kE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=U6sgFA3Q 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=cqgtuBJk 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=mbtDBoFE 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=_fT-Dylg 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=mbtDBoFE"
                          alt="Santa Cruz"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=GNHpDPkG 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=n9GTk9kE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=U6sgFA3Q 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=cqgtuBJk 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=mbtDBoFE 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=_fT-Dylg 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=GNHpDPkG 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=n9GTk9kE 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=U6sgFA3Q 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=cqgtuBJk 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=mbtDBoFE 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=_fT-Dylg 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/VCW_D_SantaCruz_Hero_Thomas_Hawk_5513212075_20c9c0eeee_o_1280x642_0.jpg?itok=mbtDBoFE"
                          alt="Santa Cruz"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Santa Cruz"
                  title="Santa Cruz"
                  className="m-highlightCard__link"
                  href="/places-to-visit/santa-cruz/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Santa Cruz County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Santa Cruz
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="m-highlightCardWrapper  ">
              <article id="hC" className="m-highlightCard">
                <div className="m-highlightCard__image">
                  <div
                    className=" gatsby-image-wrapper"
                    style={{ position: "static", overflow: "hidden" }}
                  >
                    <div
                      aria-hidden="true"
                      style={{ width: "100%", paddingBottom: "50%" }}
                    ></div>
                    <img
                      aria-hidden="true"
                      src=""
                      alt=""
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 0,
                        transitionDelay: "500ms",
                      }}
                    />
                    <picture>
                      <source
                        srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=yDUowuha 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=q32CQzTh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=ql3bmyiN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=E6w0iwAN 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=btLmK20X 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=EsJ1HqiG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg 1280w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                        <img
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=yDUowuha 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=q32CQzTh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=ql3bmyiN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=E6w0iwAN 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=btLmK20X 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=EsJ1HqiG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=btLmK20X"
                          alt="Temecula"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            opacity: 1,
                            transition: "opacity 500ms ease 0s",
                          }}
                        />
                      
                    </picture>
                    <noscript>
                      <picture>
                        <source
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=yDUowuha 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=q32CQzTh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=ql3bmyiN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=E6w0iwAN 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=btLmK20X 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=EsJ1HqiG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg 1280w"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />
                        <img
                          loading="lazy"
                          sizes="(max-width: 1000px) 100vw, 1000px"
                          srcset="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_150/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=yDUowuha 150w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_250/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=q32CQzTh 250w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_500/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=ql3bmyiN 500w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_680/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=E6w0iwAN 680w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=btLmK20X 1000w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=EsJ1HqiG 1200w,
  https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg 1280w"
                          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/vc_spotlighttemeculavalley_hero_st_rf_bj1beh_1280x640.jpg?itok=btLmK20X"
                          alt="Temecula"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </picture>
                    </noscript>
                  </div>
                </div>
                <a
                  alt="Temecula"
                  title="Temecula"
                  className="m-highlightCard__link"
                  href="/places-to-visit/temecula/"
                ></a>
                <div className="m-highlightCard__link-wrapper">
                  <div className="m-highlightCard__link__content">
                    <div className="m-highlightCard__link__content--top "></div>
                    <div className="m-highlightCard__link__content--middle ">
                      <span className="m-highlightCard__link__content--headline">
                        Riverside County
                      </span>
                      <span className="m-highlightCard__link__content--heading">
                        Temecula
                      </span>
                    </div>
                    <div className="m-highlightCard__link__content--bottom">
                      <span className="m-highlightCard__link__content--copy"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <a
            className="o-horizontalScrollContainer__cta container"
            href="/cities/"
          >
            <span>View All Cities</span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="a-icon a-icon--small "
              aria-label="L"
              style={{ fill: "rgb(81, 182, 210)" }}
            >
              <use xlink:href="/assets/svg/sprite.svg#ico-caret-right-thick"></use>
            </svg> */}
          </a>
        </section>
      </div>
    </div>
  );
}

export default Section2;
