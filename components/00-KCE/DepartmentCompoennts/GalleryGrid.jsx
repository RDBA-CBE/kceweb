import Image from "next/image";
import Link from "next/link";

const GalleryGrid = ({ data }) => {
  return (
    <div className="kce gallery">
      {data?.title && <h2 className="section-ti">{data?.title}</h2>}
      {data?.content?.map((item, index) => (
        <div className="row align-items-center py-4" key={index}>
          <div className="col-lg-12">
            {item?.title && (
              <div className=" text-center mb--40">
                <h3 className="sub-ti">{item.title}</h3>
              </div>
            )}
            <ul className="brand-list brand-style-3 justify-content-center justify-content-md-start">
              {item?.url
                ? item?.images.map((img, innerIndex) => (
                    <li key={innerIndex}>
                      <Link href="#">
                        <img src={img?.img} alt="Brand Image" />
                        {img?.title && <p className="mt-4">{img?.title}</p>}
                      </Link>
                    </li>
                  ))
                : item?.images.map((img, innerIndex) => (
                    <li key={innerIndex}>
                      <img src={img?.img} alt="Brand Image" />
                      {img?.title && <p className="mt-4">{img?.title}</p>}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
