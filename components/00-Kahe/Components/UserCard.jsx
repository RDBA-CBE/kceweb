import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstLetterUp } from "@/utils/functions.utils";

const UserCard = ({ data }) => {
  console.log("item", data);

  return (
    <>

      <div className="container">
        <div className="row row--15 mt_dec--30">
          {data?.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mt--30 d-flex" key={index}>
              <div className="rbt-team team-style-default rbt-hover-02 d-flex flex-column w-100 ">
                <div className="inner d-flex flex-column flex-grow-1 h-100" style={{border: "1px solid #1C3C4A"}}>
                  <div className="thumbnail">
                    <img src={item.src} alt={item.caption} />
                  </div>

                  {/* 🔥 flex-grow applied here */}
                  <div className="content flex-grow-1 d-flex flex-column">
                    <h2 className="main-sub-ti">{FirstLetterUp(item.title)}</h2>
                    <p className=" text-green">{FirstLetterUp(item.caption)}</p>

                    {/* push CTA to bottom */}
                    <span className="mt-auto">
                      <a href={item.url}>
                         <p style={{fontSize:"14px"}}>
                        View{" "}
                        <span>
                          <i className="feather-arrow-up-right"></i>
                        </span>
                      </p>
                      </a>
                     
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserCard;
