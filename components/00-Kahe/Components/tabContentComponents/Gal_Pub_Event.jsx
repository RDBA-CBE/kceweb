import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Gal_Pub_Event = ({
  InfraGallery,
  publicationsContent,
  eventsContent,
}) => {
  const router = useRouter();

 const goToGallery = () => {
  sessionStorage.setItem("galleryData", JSON.stringify(InfraGallery));
  sessionStorage.setItem("galleryUrl", window.location.href);
  router.push(`/kahe/gallery/${InfraGallery.slug}`);
};

const goToPublication = () => {
  sessionStorage.setItem(
    "publicationsData",
    JSON.stringify(publicationsContent)
  );
  sessionStorage.setItem("publicationsUrl", window.location.href);
  router.push(`/kahe/publications/${publicationsContent.slug}`);
};

const goToEvents = () => {
  sessionStorage.setItem("eventsData", JSON.stringify(eventsContent));
  sessionStorage.setItem("eventsUrl", window.location.href);
  router.push(`/kahe/events/${eventsContent.slug}`);
};


  return (
    <>
      <div className="section-wid rbt-course-feature-inner">
        <div className="row g-5">
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            onClick={goToGallery} // 👈 On click push to /events
            style={{ cursor: "pointer" }} // 👈 To indicate clickable
          >
            <div className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible">
              <div className="inner">
                <div className="thumbnail">
                  <Image
                    src="/images/Kahe/Innerpages/infra-1.jpg"
                    width={300}
                    height={300}
                    priority
                    alt="Icons Images"
                  />
                </div>
                <div className="content">
                  <h5 className="title">Infrastructure Gallery</h5>

                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      View <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            onClick={goToPublication} // 👈 On click push to /events
            style={{ cursor: "pointer" }} // 👈 To indicate clickable
          >
            <div className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible">
              <div className="inner">
                <div className="thumbnail">
                  <Image
                    src="/images/Kahe/Innerpages/infra-1.jpg"
                    width={300}
                    height={300}
                    priority
                    alt="Icons Images"
                  />
                </div>
                <div className="content">
                  <h3 className="title">Publications</h3>
                  {/* <p className="text-white w-80">Lorem, ipsum dolor sit amet consectetur adipisicing molestias eos quod facere eaque!</p> */}
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      View <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            onClick={goToEvents} // 👈 On click push to /events
            style={{ cursor: "pointer" }} // 👈 To indicate clickable
          >
            <div className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible">
              <div className="inner">
                <div className="thumbnail">
                  <Image
                    src="/images/Kahe/Innerpages/infra-1.jpg"
                    width={300}
                    height={300}
                    priority
                    alt="Icons Images"
                  />
                </div>
                <div className="content">
                  <h5 className="title">Events</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      View <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gal_Pub_Event;
