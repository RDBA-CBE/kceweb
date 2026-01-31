import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const SilderCard = ({ isDesc, data }) => {
  return (
    <>
      <div className="rbt-testimonial-area ">
        {data &&
          data.map((data, index) => (
            <div className="" key={index}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title ">
                    <h2 className="decor-ti">{data.title}</h2>

                    {data.desc && <p className=" mt--20">{data.desc}</p>}
                  </div>
                </div>
              </div>

              <Swiper
                className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30"
                slidesPerView={1}
                modules={[Navigation]}
                autoHeight={true} 
                navigation={{
                  nextEl: ".rbt-arrow-right",
                  prevEl: ".rbt-arrow-left",
                }}
                breakpoints={{
                  575: {
                    slidesPerView: 1,
                  },

                  768: {
                    slidesPerView: 1,
                  },

                  992: {
                    slidesPerView: 1,
                  },
                }}
              >
                {data?.slider.map((data, index) => (
                  <SwiperSlide className="swiper-wrapper " key={index}>
                    <div className="swiper-slide">
                      <div className="single-slide px-0 mb-5">
                        <div className="rbt-testimonial-box">
                          <div className="inner bg-no-shadow bg-color-primary-opacity">
                            <div className="clint-info-wrapper gap-3">
                              {data.img && (
                                <div className="thumb">
                                  <Image
                                    src={data.img}
                                    width={494}
                                    height={494}
                                    alt="Clint Images"
                                  />
                                </div>
                              )}
                              <div className="client-info d-flex flex-column ps-0">
                                <h5 className="sub-ti mb-2">
                                  {data.title}
                                </h5>
                                <span>
                                  {data.position} <i>{data.company}</i>
                                </span>
                              </div>
                            </div>
                            <div className="description">
                              <h5
                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                style={{ fontWeight: 400 }}
                              ></h5>
                              <ul
                                className="split-list sal-animate ps-0 "
                                style={{ listStyle: "none" }}
                              >
                                {data?.list?.map((list, listIndex) => (
                                  <li key={listIndex} className="ps-0">
                                    <i className={`${list?.icon}`}></i>{" "}
                                    <span>{list?.desc}</span>
                                  </li>
                                ))}
                              </ul>
                              {/* <div className="rating mt--20">
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="rbt-swiper-arrow rbt-arrow-left">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-left"></i>
                    <i className="rbt-icon-top feather-arrow-left"></i>
                  </div>
                </div>

                <div className="rbt-swiper-arrow rbt-arrow-right">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-right"></i>
                    <i className="rbt-icon-top feather-arrow-right"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          ))}
      </div>
    </>
  );
};

export default SilderCard;
