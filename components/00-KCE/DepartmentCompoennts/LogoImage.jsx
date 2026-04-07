import Image from "next/image";
import Link from "next/link";
import RichText from "./RichText";

const LogoImage = ({ data }) => {
  return (
    <div className="kce">
      {data?.title && <h2 className="section-ti-sec">{data?.title}</h2>}
      {data?.desc && <RichText as="p" className="text-center mb-5" content={data?.desc} />}
      {data?.content?.map((item, index) => (
        <div className="row align-items-center pt-4" key={index}>
          <div className="col-lg-12">
            {item.title && (
              <div className=" text-center mb--40">
                <h3 className="sub-ti">{item.title}</h3>
              </div>
            )}
            <ul className="brand-list brand-style-3 justify-content-center">
              {item?.url
                ? item?.images.map((img, innerIndex) => (
                    <li key={innerIndex}>
                      <Link href="#">
                        <img src={img?.img} alt="Brand Image" />
                        {img?.title && <RichText as="p" className="mt-4" content={img?.title} />}
                      </Link>
                    </li>
                  ))
                : item?.images.map((img, innerIndex) => (
                    <li key={innerIndex}>
                      <img src={img?.img} alt="Brand Image" />
                      {img?.title && <RichText as="p" className="mt-4" content={img?.title} />}
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
