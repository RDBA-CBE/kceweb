import Image from "next/image";
import Link from "next/link";

const LogoImage = ({ data }) => {
  return (
    <div className="kce">
      {data?.title && <h2 className="section-ti">{data?.title}</h2>}
      {data?.content?.map((item, index) => (
        <div className="row align-items-center" key={index}>
          <div className="col-lg-12">
            <div className=" text-center mb--40">
              {item.title && <h3 className="sub-ti">{data.title}</h3>}
            </div>
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

export default LogoImage;
