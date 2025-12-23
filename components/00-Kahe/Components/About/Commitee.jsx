"use client";

import BatchIcon from "@/public/images/Kahe/icons/BatchIcon";
import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";

const Commitee = ({ data }) => {
  console.log("data", data);

  return (
    <div className=" commitee">
      <div className="decor-ti">{FirstLetterUp(data?.title)}</div>
      <div className="row py-5">
        {data?.content?.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 " key={index}>
            <Link
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href={item?.url}
            >
              <div className="inner">
                <div className="icons">
                  <BatchIcon width="60" height="60" />
                </div>
                <div className="content">
                  <h5
                    className="main-sub-ti"
                    dangerouslySetInnerHTML={{ __html: FirstLetterUp(item.title) }}
                  ></h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      View
                      <i className="feather-arrow-up-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commitee;
